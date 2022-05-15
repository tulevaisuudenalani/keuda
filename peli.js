//kaboomin asetuksia ja taustaväri
kaboom({
  global: true,
  fullscreen: true,
  scale: 2,
  debug: true,
  clearColor: [1, 0.65, 0, 1],
})
// Liikkumisnopeudet
const MOVE_SPEED = 120
const JUMP_FORCE = 390
const BIG_JUMP_FORCE = 550
let CURRENT_JUMP_FORCE = JUMP_FORCE
const FALL_DEATH = 400
const ENEMY_SPEED = 20


let isJumping = true
//Grafiikat
loadSprite('mario', 'https://media2.giphy.com/media/bwsNi6FMuVGZFthRYE/giphy.gif')
loadSprite('kysymys', 'https://i.ibb.co/rf26fQf/Kysymys-1.png')
loadSprite('block', 'https://i.ibb.co/BLcyRSK/Vihre-blocki.png')
loadSprite('surprise', 'https://i.ibb.co/WcRLH9w/Kysymys.png')
loadSprite('vastaus', 'https://i.ibb.co/61DJ1zM/Vastaus.png')
loadRoot('https://i.imgur.com/')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('evil-shroom', 'KPO3fR9.png')
loadSprite('brick', 'pogC9x5.png')
loadSprite('mushroom', '0wMd92p.png')
loadSprite('unboxed', 'bdrLpi6.png')
loadSprite('pipe-top-left', 'ReTPiWY.png')
loadSprite('pipe-top-right', 'hj2GK4n.png')
loadSprite('pipe-bottom-left', 'c1cYSbt.png')
loadSprite('pipe-bottom-right', 'nqQ79eI.png')
loadSprite('blue-block', 'fVscIbn.png')
loadSprite('blue-brick', '3e5YRQd.png')
loadSprite('blue-steel', 'gqVoI2b.png')
loadSprite('blue-evil-shroom', 'SvV4ueD.png')
loadSprite('blue-surprise', 'RMqCc1G.png')


//Pelilevelit 
scene("game", ({ level, score }) => {
  layers(['bg', 'obj', 'ui'], 'obj')

  const maps = [
    [
      '£                                                                       £',
      '£                                                                       £',
      '£                                                                       £',
      '£                                                                       £',
      '£                                                                       £',
      '£    %   =*=%=                     %               o                    £',
      '£                                                                       £',
      '£                                                                    -+ £',
      '£                   ^   ^                                            () £',
      '==============================   ========================================',
    ],
    [
      '£                                                                       £',
      '£                                                                       £',
      '£                                                                       £',
      '£                                                                       £',
      '£                                               %                       £',
      '£        %@@@%@              x x                                        £',
      '£                          x x x                                        £',
      '£                        x x x x  x             x                     -+£',
      '£               z   z  x x x x x  x            x                      ()£',
      '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  !!!!!!!!!!!!!!!  !!!!!!!!!!!!!',
    ],
    [
      '£                                                                       £',
      '£                              %                                        £',
      '£                                                                       £',
      '£                                                                       £',
      '£                                                                       £',
      '£        @%@%%@              x x                                        £',
      '£                          x x x                                        £',
      '£                        x x x x  x               x                   -+£',
      '£               z   z  x x x x x  x               x           x       ()£',
      '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!  !!!!!!!!!!!!!!!  !!!!!!!!!!!!!',
    ]
  ]
//grafiikoiden asetukset
  const levelCfg = {
    width: 20,
    height: 20,
    '=': [sprite('block'), solid(), scale(0.44)],
    '$': [sprite('coin'), 'coin'],
    '%': [sprite('surprise'), solid(), scale(1.2), 'coin-surprise'],
    '*': [sprite('surprise'), solid(), scale(1.2), 'mushroom-surprise'],
    '}': [sprite('unboxed'), solid()],
    '(': [sprite('pipe-bottom-left'), solid(), scale(0.5)],
    ')': [sprite('pipe-bottom-right'), solid(), scale(0.5)],
    '-': [sprite('pipe-top-left'), solid(), scale(0.5), 'pipe'],
    '+': [sprite('pipe-top-right'), solid(), scale(0.5), 'pipe'],
    '^': [sprite('evil-shroom'), solid(), 'dangerous'],
    '#': [sprite('mushroom'), solid(), 'mushroom', body()],
    '!': [sprite('blue-block'), solid(), scale(0.5)],
    '£': [sprite('blue-brick'), solid(), scale(0.5)],
    'z': [sprite('blue-evil-shroom'), solid(), scale(0.5), 'dangerous'],
    '@': [sprite('blue-surprise'), solid(), scale(0.5), 'coin-surprise'],
    'x': [sprite('blue-steel'), solid(), scale(0.5)],
    'i': [sprite('kysymys'),scale(0.5)],
    'o': [sprite('surprise'), solid(), 'kysymys-surprise'],
    'v': [sprite('vastaus'), solid()],

  }

  const gameLevel = addLevel(maps[level], levelCfg)
//pisteiden näyttö
  const scoreLabel = add([
    text('Pisteet ' +score),
    pos(30, 6),
    layer('ui'),
    {
      value: score,
    }
  ])
//tason tiedot
  add([text('Keuda    level ' + parseInt(level + 1) ), pos(150, 6)])
//Hahmon suurentuminen ja pienentyminen
  function big() {
    let timer = 0
    let isBig = false
    return {
      update() {
        if (isBig) {
          CURRENT_JUMP_FORCE = BIG_JUMP_FORCE
          timer -= dt()
          if (timer <= 0) {
            this.smallify()
          }
        }
      },
      isBig() {
        return isBig
      },
      smallify() {
        this.scale = vec2(1)
        CURRENT_JUMP_FORCE = JUMP_FORCE
        timer = 0
        isBig = false
      },
      biggify(time) {
        this.scale = vec2(2)
        timer = time
        isBig = true
      }
    }
  }
//hahmon ilmestyminen ja sijainti, koko yms
  const player = add([
    sprite('mario'), solid(),
    pos(50, 0),
    body(),
    scale(1),
    big(),
    origin('bot')
  ])

  action('mushroom', (m) => {
    m.move(20, 0)
  })
//mitä tapahtuu hypätessä erilaisiin palikoihin
  player.on("headbump", (obj) => {
    if (obj.is('coin-surprise')) {
      gameLevel.spawn('$', obj.gridPos.sub(0, 1))
      destroy(obj)
      gameLevel.spawn('}', obj.gridPos.sub(0,0))
    }
    if (obj.is('mushroom-surprise')) {
      gameLevel.spawn('#', obj.gridPos.sub(0, 1))
      destroy(obj)
      gameLevel.spawn('}', obj.gridPos.sub(0,0))
    }
    if (obj.is('kysymys-surprise')) {
      gameLevel.spawn('i', obj.gridPos.sub(-3, 6))
      gameLevel.spawn('v', obj.gridPos.sub(-3, 0))
      gameLevel.spawn('v', obj.gridPos.sub(-6, 0))
      gameLevel.spawn('v', obj.gridPos.sub(-9, 0))
      gameLevel.spawn('v', obj.gridPos.sub(-12, 0))
      destroy(obj)
      gameLevel.spawn('}', obj.gridPos.sub(0,0))
    }
  })
//Objekteihin osuessa tapahtuvat asiat
  player.collides('mushroom', (m) => {
    destroy(m)
    player.biggify(6)
  })

  player.collides('coin', (c) => {
    destroy(c)
    scoreLabel.value++
    scoreLabel.text = scoreLabel.value
  })

  action('dangerous', (d) => {
    d.move(-ENEMY_SPEED, 0)
  })

  player.collides('dangerous', (d) => {
    if (isJumping) {
      destroy(d)
    } else {
      go('lose', { score: scoreLabel.value})
    }
  })

  player.action(() => {
    camPos(player.pos)
    if (player.pos.y >= FALL_DEATH) {
      go('lose', { score: scoreLabel.value})
    }
  })

  player.collides('pipe', () => {
    keyPress('down', () => {
      go('game', {
        level: (level + 1) % maps.length,
        score: scoreLabel.value
      })
    })
  })
//Liikkuminen
  keyDown('left', () => {
    player.move(-MOVE_SPEED, 0)
  })

  keyDown('right', () => {
    player.move(MOVE_SPEED, 0)
  })

  player.action(() => {
    if(player.grounded()) {
      isJumping = false
    }
  })

  keyPress('space', () => {
    if (player.grounded()) {
      isJumping = true
      player.jump(CURRENT_JUMP_FORCE)
    }
  })
})
//Hävitessä
scene('lose', ({ score }) => {
  add([text(score, 32), origin('center'), pos(width()/2, height()/ 2)])
})
//Aloitus
start("game", { level: 0, score: 0})
