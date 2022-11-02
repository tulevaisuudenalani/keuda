import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

window.mobileCheck = () => {
  let check = false;
  (function (a) {
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        a
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        a.substr(0, 4)
      )
    )
      check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const mobile = window.mobileCheck();

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let lsm = false;

async function checkOR() {
  if (
    screen.orientation.type == "landscape-primary" ||
    screen.orientation.type == "landscape-secondary"
  ) {
    lsm = true;
    document.getElementById("puhelin").style.display = "none";
  } else {
    document.getElementById("puhelin").style.display = "block";
  }
}

if (mobile) {
  while (!lsm) {
    checkOR();
    await timeout(200);
  }

  kaboom({
    global: true,
    fullscreen: true,
    scale: 1.3,
    debug: true,
    background: [51, 151, 255],
  });
} else {
  // Game Engine configuration
  kaboom({
    global: true,
    fullscreen: true,
    scale: 2.5,
    debug: true,
    background: [51, 151, 255],
  });
}

document.getElementById("puhelinDiv").remove();

//KOULUTUS ALA LINKIT
//https://www.keuda.fi/ala/humanistiset-taidealat/
//https://www.keuda.fi/ala/kauppa-hallinto-oikeustieteet/
//https://www.keuda.fi/ala/luonnontieteet/
//https://www.keuda.fi/ala/maa-ja-metsatalousala-myos-puutarha-ala/
//https://www.keuda.fi/ala/palvelualat/
//https://www.keuda.fi/ala/tekniikan-alat/
//https://www.keuda.fi/ala/terveys-hyvinvointialat/
//https://www.keuda.fi/ala/tietojenkasittely-tietoliikenne-ict/

let playerMoveSpeed = 150;
let playerJumpForce = 250;
let playerPoints = 0;

let scopeA = 0; // Humanistiset ja taidealat
let scopeB = 0; // Kauppa, hallinto ja oikeustieteet
let scopeC = 0; // Luonnontieteet
let scopeD = 0; // Maa- ja metsätalous
let scopeE = 0; // Palvelualat
let scopeF = 0; // Tekniikan alat
let scopeG = 0; // Terveys ja hyvinvointialat
let scopeH = 0; // Tietojenkäsittely ja tietoliikenne

// Kysymys tehty
// Ensimmäinen taso
let kys11 = false;
let kys12 = false;
let kys13 = false;

// Toinen taso
let kys21 = false;
let kys22 = false;
let kys23 = false;

// Kolmas taso
let kys31 = false;
let kys32 = false;

//Kuvat
loadSprite("player", "image/hahmo.png");
loadSprite("background", "image/tausta.png");
loadSprite("line", "image/tausta_alareuna.png");
loadSprite("teleport", "image/ampari.png");
loadSprite("ohjaus", "image/ohjausnuoli.png");

loadSprite("logo", "image/keuda_logo.png");
loadSprite("bg2", "image/tausta_shade.png");
loadSprite("suprise", "image/block_tyhja_kysymys.png");
loadSprite("spider", "image/örkki.png");
loadSprite("block", "image/block.png");
loadSprite("arrow", "image/nuoli.png");
loadSprite("reminder", "image/teksti_nuoli.png");
loadSprite("flagfinish", "image/maali_tausta_levelille.png");
loadSprite("start", "image/start.png");
loadSprite("empty", "image/block_vastaus.png");
loadSprite("end", "image/maali_tausta.png");
loadSprite("endback", "image/maali_tausta_ala.png");
loadSprite("endbox", "image/loppu_solu.png");
loadSprite("endtext", "image/loppu_teksti.png");
loadSprite("aloitus1", "image/aloitus otsikko_ala.png");
loadSprite("aloitus2", "image/aloitus otsikko_alin.png");
loadSprite("aloitus3", "image/aloitus_otsikko.png");
loadSprite("aloitus2puh", "image/aloitus otsikko_mobile.png");
loadSprite("ict", "image/teksti_alku.png");
loadSprite("ala1", "image/ala1.png");
loadSprite("ala2", "image/ala2.png");
loadSprite("ala3", "image/ala3.png");
loadSprite("ala4", "image/ala4.png");
loadSprite("ala5", "image/ala5.png");
loadSprite("ala6", "image/ala6.png");
loadSprite("ala7", "image/ala7.png");
loadSprite("ala8", "image/ala8.png");

// Questions
loadSprite("k1", "image/kysymykset/k_1.png");
loadSprite("k2", "image/kysymykset/k_2.png");
loadSprite("k3", "image/kysymykset/k_3.png");

loadSprite("k4", "image/kysymykset/k_4.png");
loadSprite("k5", "image/kysymykset/k_5.png");
loadSprite("k6", "image/kysymykset/k_6.png");

loadSprite("k7", "image/kysymykset/k_7.png");
loadSprite("k8", "image/kysymykset/k_8.png");

// Answers
loadSprite("k1a", "image/kysymykset/k_1_a.png");
loadSprite("k1b", "image/kysymykset/k_1_b.png");
loadSprite("k1c", "image/kysymykset/k_1_c.png");
loadSprite("k2a", "image/kysymykset/k_2_a.png");
loadSprite("k2b", "image/kysymykset/k_2_b.png");
loadSprite("k2c", "image/kysymykset/k_2_c.png");
loadSprite("k3a", "image/kysymykset/k_3_a.png");
loadSprite("k3b", "image/kysymykset/k_3_b.png");
loadSprite("k4a", "image/kysymykset/k_4_a.png");
loadSprite("k4b", "image/kysymykset/k_4_b.png");
loadSprite("k4c", "image/kysymykset/k_4_c.png");
loadSprite("k5a", "image/kysymykset/k_5_a.png");
loadSprite("k5b", "image/kysymykset/k_5_b.png");
loadSprite("k5c", "image/kysymykset/k_5_c.png");
loadSprite("k6a", "image/kysymykset/k_6_a.png");
loadSprite("k6b", "image/kysymykset/k_6_b.png");
loadSprite("k6c", "image/kysymykset/k_6_c.png");
loadSprite("k7a", "image/kysymykset/k_7_a.png");
loadSprite("k7b", "image/kysymykset/k_7_b.png");
loadSprite("k8a", "image/kysymykset/k_8_a.png");
loadSprite("k8b", "image/kysymykset/k_8_b.png");
loadSprite("k8c", "image/kysymykset/k_8_c.png");

// Load sounds
loadSound("block", "./audio/block.wav");
loadSound("hit", "./audio/hit.wav");
loadSound("hyppy", "./audio/jump.mp3");

// Load levels
let levels = [
  [
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                                    £",
    "£                        (           £",
    "======================================",
  ],
  [
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                             `                                         £",
    "£                                                                       £",
    "£             /               D  E  F                     ¤             £",
    "£                             M  N  O          =                        £",
    "£             A  B  C                          =          G     I       £",
    "£             J  K  L                         ===         P     Q       £",
    "£                            =========       =====                    + £",
    "£                           ===========     =======                     £",
    "=========================================================================",
  ],
  [
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£           /                  `                   ¤                    £",
    "£                                                                       £",
    "£           A   B   C          D    E    F         G   H   I            £",
    "£           J   K   L          M    N    O         P   Q   R            £",
    "£   #                    £                   £                        + £",
    "££££££££                 £££                  £               ££   #    £",
    "=========================================================================",
  ],
  [
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£                                                                       £",
    "£            /                 `                                        £",
    "£                                                                       £",
    "£            A     B           D  E  F           £                      £",
    "£            J     K           L  M  N         £££                      £",
    "£                        £                   ££££££                   + £",
    "££££££££££               £                 ££££££££          #     #    £",
    "=========================================================================",
  ],
  [
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
    "                                           ",
  ],
];

onLoad(() => {
  go("start");
});
// Start level
scene("start", () => {
  add([
    sprite("background", { width: width(), height: height() }),
    pos(0, 0),
    fixed(),
  ]);

  addLevel(levels[0], {
    width: 20,
    height: 20,
    "=": () => [sprite("block"), solid(), area(), scale(0.44), ""],
    "£": () => [sprite("block"), solid(), area(), scale(0.44), ""],
    "+": () => [sprite("tunnel"), solid(), area(), scale(0.5), "Tunnel"],
    "^": () => [sprite("arrow"), scale(0.4), "Arrow"],
    "#": () => [sprite("spider"), solid(), area(), scale(1), "Spider"],
    "-": () => [sprite("reminder"), area(), scale(0.2), "Reminder"],
    "(": () => [
      sprite("start"),
      area(),
      scale(0.4),
      origin("center"),
      "Start",
    ],
  });

  add([pos(380, 300), sprite("aloitus3"), origin("center"), scale(0.07)]);

  if (!mobile) {
    add([
      pos(380, 330),
      sprite("aloitus1"),
      origin("center"),
      scale(0.05),
    ]);

    add([
      pos(380, 470),
      text("Ellet pysty liikkumaan klikkaa peliruutua"),
      origin("center"),
      scale(0.2),
    ]);
    add([
      pos(380, 350),
      sprite("aloitus2"),
      origin("center"),
      scale(0.05),
    ]);
  } else {
    add([
      pos(380, 345),
      sprite("aloitus2puh"),
      origin("center"),
      scale(0.7),
    ]);
  }

  add([pos(390, 440), sprite("ict"), scale(0.5), origin("center")]);

  add([pos(10, 10), sprite("logo"), scale(0.3), fixed()]);

  add([
    sprite("bg2", { width: width(), height: height() }),
    pos(0, 0),
    fixed(),
  ]);

  let player = add([
    sprite("player"),
    solid(),
    pos(380, 380),
    body(),
    area(),
    scale(0.7),
  ]);

  player.onCollide("Start", (Start) => {
    go("levelONE");
  });

  gravity(660);

  if (mobile) {
    const ylosNappi = add([
      sprite("ohjaus"),
      pos(width() - 70, height() - 70),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),

      "ylosNappi",
    ]);

    const vasenNappi = add([
      sprite("ohjaus"),
      pos(40, height() - 40),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),
      rotate(-90),
      origin("center"),

      "vasenNappi",
    ]);

    const oikeaNappi = add([
      sprite("ohjaus"),
      pos(110, height() - 40),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),
      rotate(90),
      origin("center"),

      "oikeaNappi",
    ]);

    let keysDown = {
      left: false,
      right: false,
    };

    let jumpID = -1;
    let leftID = -1;
    let rightID = -1;

    onTouchStart((id, pos) => {
      if (ylosNappi.hasPoint(pos)) {
        if (player.isGrounded()) {
          jumpID = id;
          player.jump(playerJumpForce, 0);
        }
      } else if (vasenNappi.hasPoint(pos)) {
        keysDown.left = true;
        leftID = id;
      } else if (oikeaNappi.hasPoint(pos)) {
        keysDown.right = true;
        rightID = id;
      }
    });

    onUpdate(() => {
      if (keysDown.left) {
        player.move(-playerMoveSpeed, 0);
        camPos(player.pos);
        player.flipX(true);
      }
      if (keysDown.right) {
        player.move(playerMoveSpeed, 0);
        camPos(player.pos);
        player.flipX(false);
      }
    });

    onTouchEnd((id, pos) => {
      if (id == jumpID) {
        jumpID = -1;
        return;
      } else if (id == rightID) {
        rightID = -1;
        keysDown.right = false;
      } else if (id == leftID) {
        leftID = -1;
        keysDown.left = false;
      }
    });
  }

  // Movement
  player.onUpdate(() => {
    camPos(player.pos);
  });

  onKeyDown("left", () => {
    player.move(-playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(true);
  });

  onKeyDown("a", () => {
    player.move(-playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(true);
  });

  onKeyDown("right", () => {
    player.move(playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(false);
  });

  onKeyDown("d", () => {
    player.move(playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(false);
  });

  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyPress("up", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyPress("w", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
    }
  });
});
// First level
scene("levelONE", () => {
  add([
    sprite("background", { width: width(), height: height() }),
    pos(0, 0),
    fixed(),
  ]);

  add([
    sprite("line", { width: screen.width, height: screen.height }),
    pos(0, 250),
    fixed(),
  ]);

  add([text("TASO: 1"), pos(150, 370), scale(0.2)]);

  addLevel(levels[1], {
    width: 20,
    height: 20,
    "=": () => [sprite("block"), solid(), area(), scale(0.44), ""],
    "£": () => [sprite("block"), solid(), area(), scale(0.44), ""],
    "+": () => [
      sprite("teleport"),
      solid(),
      area(),
      scale(0.5),
      "Teleport",
    ],
    "^": () => [sprite("arrow"), scale(0.5), "Arrow"],
    "-": () => [sprite("reminder"), area(), scale(0.25), "Reminder"],
    A: () => [sprite("suprise"), solid(), area(), scale(0.4), "A"],
    B: () => [sprite("suprise"), solid(), area(), scale(0.4), "B"],
    C: () => [sprite("suprise"), solid(), area(), scale(0.4), "C"],
    D: () => [sprite("suprise"), solid(), area(), scale(0.4), "D"],
    E: () => [sprite("suprise"), solid(), area(), scale(0.4), "E"],
    F: () => [sprite("suprise"), solid(), area(), scale(0.4), "F"],
    G: () => [sprite("suprise"), solid(), area(), scale(0.4), "G"],
    I: () => [sprite("suprise"), solid(), area(), scale(0.4), "I"],
    "/": () => [sprite("k1"), pos(-5, 0), area(), scale(0.2), "K1"],
    "`": () => [sprite("k2"), area(), scale(0.2), "K2"],
    "¤": () => [sprite("k3"), pos(-5, 0), area(), scale(0.2), "K3"],
    J: () => [sprite("k1a"), pos(-1, 1), area(), scale(0.12), "K1A"],
    K: () => [sprite("k1b"), pos(0, 1), area(), scale(0.12), "K1B"],
    L: () => [sprite("k1c"), pos(-10, 1), area(), scale(0.12), "K1C"],
    M: () => [sprite("k2a"), pos(-5, 1), area(), scale(0.12), "K2A"],
    N: () => [sprite("k2b"), pos(-4, 1), area(), scale(0.12), "K2B"],
    O: () => [sprite("k2c"), pos(-3, 1), area(), scale(0.12), "K2C"],
    P: () => [sprite("k3a"), pos(-17, 1), area(), scale(0.18), "K3A"],
    Q: () => [sprite("k3b"), pos(-34, 1), area(), scale(0.16), "K3B"],
    R: () => [sprite(""), pos(0, 1), area(), scale(0.12), "K1A"],
  });

  const player = add([
    sprite("player"),
    solid(),
    pos(80, 400),
    body(),
    area(),
    scale(0.7),
  ]);

  gravity(660);

  if (mobile) {
    const ylosNappi = add([
      sprite("ohjaus"),
      pos(width() - 70, height() - 70),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),

      "ylosNappi",
    ]);

    const vasenNappi = add([
      sprite("ohjaus"),
      pos(40, height() - 40),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),
      rotate(-90),
      origin("center"),

      "vasenNappi",
    ]);

    const oikeaNappi = add([
      sprite("ohjaus"),
      pos(110, height() - 40),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),
      rotate(90),
      origin("center"),

      "oikeaNappi",
    ]);

    let keysDown = {
      left: false,
      right: false,
    };

    let jumpID = -1;
    let leftID = -1;
    let rightID = -1;

    onTouchStart((id, pos) => {
      if (ylosNappi.hasPoint(pos)) {
        if (player.isGrounded()) {
          jumpID = id;
          player.jump(playerJumpForce, 0);
        }
      } else if (vasenNappi.hasPoint(pos)) {
        keysDown.left = true;
        leftID = id;
      } else if (oikeaNappi.hasPoint(pos)) {
        keysDown.right = true;
        rightID = id;
      }
    });

    onUpdate(() => {
      if (keysDown.left) {
        player.move(-playerMoveSpeed, 0);
        camPos(player.pos);
        player.flipX(true);
      }
      if (keysDown.right) {
        player.move(playerMoveSpeed, 0);
        camPos(player.pos);
        player.flipX(false);
      }
    });

    onTouchEnd((id, pos) => {
      if (id == jumpID) {
        jumpID = -1;
        return;
      } else if (id == rightID) {
        rightID = -1;
        keysDown.right = false;
      } else if (id == leftID) {
        leftID = -1;
        keysDown.left = false;
      }
    });
  }

  // Question: 1 ------ //
  player.onCollide("A", (A) => {
    let x = A.pos.x;
    let y = A.pos.y;
    destroyAll("A");
    destroyAll("B");
    destroyAll("C");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeC++;
    scopeD++;
    scopeE++;
    kys11 = true;
  });

  player.onCollide("B", (B) => {
    let x = B.pos.x;
    let y = B.pos.y;
    destroyAll("A");
    destroyAll("B");
    destroyAll("C");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeA++;
    scopeB++;
    scopeE++;
    scopeH++;
    kys11 = true;
  });

  player.onCollide("C", (C) => {
    let x = C.pos.x;
    let y = C.pos.y;
    destroyAll("A");
    destroyAll("B");
    destroyAll("C");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeF++;
    scopeG++;
    kys11 = true;
  });

  // Question: 2 ------ //
  player.onCollide("D", (D) => {
    let x = D.pos.x;
    let y = D.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeA++;
    scopeB++;
    scopeF++;
    scopeH++;
    kys12 = true;
  });

  player.onCollide("E", (E) => {
    let x = E.pos.x;
    let y = E.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeC++;
    scopeE++;
    scopeG++;
    kys12 = true;
  });

  player.onCollide("F", (F) => {
    let x = F.pos.x;
    let y = F.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeD++;
    kys12 = true;
  });

  // Question: 3 ------ //
  player.onCollide("G", (G) => {
    let x = G.pos.x;
    let y = G.pos.y;
    destroyAll("G");
    destroyAll("I");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeC++;
    scopeE++;
    scopeF++;
    scopeG++;
    kys13 = true;
  });

  player.onCollide("I", (I) => {
    let x = I.pos.x;
    let y = I.pos.y;
    destroyAll("G");
    destroyAll("I");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeA++;
    scopeB++;
    scopeD++;
    scopeH++;
    kys13 = true;
  });

  player.onCollide("Teleport", (Teleport) => {
    if (kys11 == true && kys12 == true && kys13 == true) {
      go("levelTWO");
    }
  });
  // Movement
  player.onUpdate(() => {
    camPos(player.pos);
  });

  onKeyDown("left", () => {
    player.move(-playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(true);
  });

  onKeyDown("right", () => {
    player.move(playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(false);
  });
  onKeyPress("up", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyPress("w", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyDown("a", () => {
    player.move(-playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(true);
  });

  onKeyDown("d", () => {
    player.move(playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(false);
  });
});
// Second level
scene("levelTWO", () => {
  add([
    sprite("background", { width: width(), height: height() }),
    pos(0, 0),
    fixed(),
  ]);

  add([
    sprite("line", { width: screen.width, height: screen.height }),
    pos(0, 250),
    fixed(),
  ]);

  add([text("TASO: 2"), pos(125, 280), scale(0.2)]);

  addLevel(levels[2], {
    width: 20,
    height: 20,
    "=": () => [sprite("block"), solid(), area(), scale(0.44), "Block"],
    "£": () => [sprite("block"), solid(), area(), scale(0.44), "Wall"],
    "+": () => [
      sprite("teleport"),
      solid(),
      area(),
      scale(0.5),
      "Teleport",
    ],
    "^": () => [sprite("arrow"), scale(0.4), "Arrow"],
    "#": () => [sprite("spider"), solid(), area(), scale(1), "Spider"],
    "-": () => [sprite("reminder"), area(), scale(0.2), "Reminder"],
    A: () => [sprite("suprise"), solid(), area(), scale(0.4), "A"],
    B: () => [sprite("suprise"), solid(), area(), scale(0.4), "B"],
    C: () => [sprite("suprise"), solid(), area(), scale(0.4), "C"],
    D: () => [sprite("suprise"), solid(), area(), scale(0.4), "D"],
    E: () => [sprite("suprise"), solid(), area(), scale(0.4), "E"],
    F: () => [sprite("suprise"), solid(), area(), scale(0.4), "F"],
    G: () => [sprite("suprise"), solid(), area(), scale(0.4), "G"],
    H: () => [sprite("suprise"), solid(), area(), scale(0.4), "H"],
    I: () => [sprite("suprise"), solid(), area(), scale(0.4), "I"],
    "/": () => [sprite("k4"), area(), scale(0.2), "K4"],
    "`": () => [sprite("k5"), pos(23, 0), area(), scale(0.15), "K5"],
    "¤": () => [sprite("k6"), pos(18, 0), area(), scale(0.2), "K6"],
    J: () => [sprite("k4a"), pos(-14, 1), area(), scale(0.13), "K4A"],
    K: () => [sprite("k4b"), pos(-11, 1), area(), scale(0.17), "K4B"],
    L: () => [sprite("k4c"), pos(-19, 1), area(), scale(0.17), "K4C"],
    M: () => [sprite("k5a"), pos(-12, 1), area(), scale(0.18), "K5A"],
    N: () => [sprite("k5b"), pos(-14, 1), area(), scale(0.18), "K5B"],
    O: () => [sprite("k5c"), pos(-12, 1), area(), scale(0.17), "K5C"],
    P: () => [sprite("k6a"), pos(-11, 1), area(), scale(0.18), "K6A"],
    Q: () => [sprite("k6b"), pos(-15, 1), area(), scale(0.19), "K6B"],
    R: () => [sprite("k6c"), pos(-9, 1), area(), scale(0.13), "K6C"],
  });

  const player = add([
    sprite("player"),
    solid(),
    pos(140, 250),
    body(),
    area(),
    scale(0.7),
  ]);

  gravity(660);

  if (mobile) {
    const ylosNappi = add([
      sprite("ohjaus"),
      pos(width() - 70, height() - 70),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),

      "ylosNappi",
    ]);

    const vasenNappi = add([
      sprite("ohjaus"),
      pos(40, height() - 40),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),
      rotate(-90),
      origin("center"),

      "vasenNappi",
    ]);

    const oikeaNappi = add([
      sprite("ohjaus"),
      pos(110, height() - 40),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),
      rotate(90),
      origin("center"),

      "oikeaNappi",
    ]);

    let keysDown = {
      left: false,
      right: false,
    };

    let jumpID = -1;
    let leftID = -1;
    let rightID = -1;

    onTouchStart((id, pos) => {
      if (ylosNappi.hasPoint(pos)) {
        if (player.isGrounded()) {
          jumpID = id;
          player.jump(playerJumpForce, 0);
        }
      } else if (vasenNappi.hasPoint(pos)) {
        keysDown.left = true;
        leftID = id;
      } else if (oikeaNappi.hasPoint(pos)) {
        keysDown.right = true;
        rightID = id;
      }
    });

    onUpdate(() => {
      if (keysDown.left) {
        player.move(-playerMoveSpeed, 0);
        camPos(player.pos);
        player.flipX(true);
      }
      if (keysDown.right) {
        player.move(playerMoveSpeed, 0);
        camPos(player.pos);
        player.flipX(false);
      }
    });

    onTouchEnd((id, pos) => {
      if (id == jumpID) {
        jumpID = -1;
        return;
      } else if (id == rightID) {
        rightID = -1;
        keysDown.right = false;
      } else if (id == leftID) {
        leftID = -1;
        keysDown.left = false;
      }
    });
  }

  // Question: 4 ------ //
  player.onCollide("A", (A) => {
    let x = A.pos.x;
    let y = A.pos.y;
    destroyAll("A");
    destroyAll("B");
    destroyAll("C");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeA++;
    kys21 = true;
  });

  player.onCollide("B", (B) => {
    let x = B.pos.x;
    let y = B.pos.y;
    destroyAll("A");
    destroyAll("B");
    destroyAll("C");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeF++;
    kys21 = true;
  });
  player.onCollide("C", (C) => {
    let x = C.pos.x;
    let y = C.pos.y;
    destroyAll("A");
    destroyAll("B");
    destroyAll("C");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeC++;
    scopeD++;
    kys21 = true;
  });
  //Question 5
  player.onCollide("D", (D) => {
    let x = D.pos.x;
    let y = D.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeE++;
    scopeG++;
    kys22 = true;
  });
  player.onCollide("E", (E) => {
    let x = E.pos.x;
    let y = E.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeB++;
    scopeD++;
    scopeF++;
    scopeH++;
    kys22 = true;
  });
  player.onCollide("F", (F) => {
    let x = F.pos.x;
    let y = F.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeA++;
    scopeC++;
    kys22 = true;
  });

  // Question 6

  player.onCollide("G", (G) => {
    let x = G.pos.x;
    let y = G.pos.y;
    destroyAll("G");
    destroyAll("H");
    destroyAll("I");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeA++;
    scopeB++;
    scopeH++;
    kys23 = true;
  });
  player.onCollide("H", (H) => {
    let x = H.pos.x;
    let y = H.pos.y;
    destroyAll("G");
    destroyAll("H");
    destroyAll("I");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeD++;
    scopeF++;
    kys23 = true;
  });
  player.onCollide("I", (I) => {
    let x = I.pos.x;
    let y = I.pos.y;
    destroyAll("G");
    destroyAll("H");
    destroyAll("I");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeC++;
    scopeE++;
    scopeG++;
    kys23 = true;
  });

  player.onCollide("Teleport", (Teleport) => {
    if (kys21 == true && kys22 == true && kys23 == true) {
      go("levelTHREE");
    }
  });

  onUpdate("Spider", (Spider) => {
    Spider.move(-15, 0);
  });

  player.onCollide("Spider", (Spider) => {
    shake(10);
    const hitSound = play("hit", {
      volume: 0.01,
      loop: false,
    });
  });
  // Movement
  player.onUpdate(() => {
    camPos(player.pos);
  });

  onKeyDown("left", () => {
    player.move(-playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(true);
  });

  onKeyDown("a", () => {
    player.move(-playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(true);
  });

  onKeyDown("right", () => {
    player.move(playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(false);
  });

  onKeyDown("d", () => {
    player.move(playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(false);
  });

  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyPress("up", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyPress("w", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });
});
// Third level
scene("levelTHREE", () => {
  add([
    sprite("background", { width: width(), height: height() }),
    pos(0, 0),
    fixed(),
  ]);

  add([
    sprite("line", { width: screen.width, height: screen.height }),
    pos(0, 250),
    fixed(),
  ]);

  addLevel(levels[3], {
    width: 20,
    height: 20,
    "=": () => [sprite("block"), solid(), area(), scale(0.44), ""],
    "£": () => [sprite("block"), solid(), area(), scale(0.44), ""],
    "+": () => [
      sprite("teleport"),
      solid(),
      area(),
      scale(0.5),
      "Teleport",
    ],
    "^": () => [sprite("arrow"), scale(0.4), "Arrow"],
    "#": () => [sprite("spider"), solid(), area(), scale(1), "Spider"],
    A: () => [sprite("suprise"), solid(), area(), scale(0.4), "A"],
    B: () => [sprite("suprise"), solid(), area(), scale(0.4), "B"],
    C: () => [sprite("suprise"), solid(), area(), scale(0.4), "C"],
    D: () => [sprite("suprise"), solid(), area(), scale(0.4), "D"],
    E: () => [sprite("suprise"), solid(), area(), scale(0.4), "E"],
    F: () => [sprite("suprise"), solid(), area(), scale(0.4), "F"],
    G: () => [sprite("suprise"), solid(), area(), scale(0.4), "G"],
    H: () => [sprite("suprise"), solid(), area(), scale(0.4), "H"],
    I: () => [sprite("suprise"), solid(), area(), scale(0.4), "I"],
    "-": () => [sprite("reminder"), area(), scale(0.2), "Reminder"],
    "!": () => [
      sprite("flagfinish"),
      solid(),
      area(),
      scale(0.5),
      "flagfinish",
    ],

    "/": () => [sprite("k7"), pos(13, 0), area(), scale(0.2), "K7"],
    "`": () => [sprite("k8"), pos(-7, 0), area(), scale(0.2), "K8"],
    J: () => [sprite("k7a"), pos(-10, 1), area(), scale(0.18), "K7A"],
    K: () => [sprite("k7b"), pos(-12, 1), area(), scale(0.18), "K7B"],
    L: () => [sprite("k8a"), pos(1, 1), area(), scale(0.17), "K8A"],
    M: () => [sprite("k8b"), pos(-1, 1), area(), scale(0.12), "K8B"],
    N: () => [sprite("k8c"), pos(5, 1), area(), scale(0.12), "K8C"],
  });

  const player = add([
    sprite("player"),
    solid(),
    pos(140, 160),
    body(),
    area(),
    scale(0.7),
  ]);

  gravity(660);

  if (mobile) {
    const ylosNappi = add([
      sprite("ohjaus"),
      pos(width() - 70, height() - 70),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),

      "ylosNappi",
    ]);

    const vasenNappi = add([
      sprite("ohjaus"),
      pos(40, height() - 40),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),
      rotate(-90),
      origin("center"),

      "vasenNappi",
    ]);

    const oikeaNappi = add([
      sprite("ohjaus"),
      pos(110, height() - 40),
      fixed(),
      opacity(0.8),
      area(),
      scale(0.25),
      rotate(90),
      origin("center"),

      "oikeaNappi",
    ]);

    let keysDown = {
      left: false,
      right: false,
    };

    let jumpID = -1;
    let leftID = -1;
    let rightID = -1;

    onTouchStart((id, pos) => {
      if (ylosNappi.hasPoint(pos)) {
        if (player.isGrounded()) {
          jumpID = id;
          player.jump(playerJumpForce, 0);
        }
      } else if (vasenNappi.hasPoint(pos)) {
        keysDown.left = true;
        leftID = id;
      } else if (oikeaNappi.hasPoint(pos)) {
        keysDown.right = true;
        rightID = id;
      }
    });

    onUpdate(() => {
      if (keysDown.left) {
        player.move(-playerMoveSpeed, 0);
        camPos(player.pos);
        player.flipX(true);
      }
      if (keysDown.right) {
        player.move(playerMoveSpeed, 0);
        camPos(player.pos);
        player.flipX(false);
      }
    });

    onTouchEnd((id, pos) => {
      if (id == jumpID) {
        jumpID = -1;
        return;
      } else if (id == rightID) {
        rightID = -1;
        keysDown.right = false;
      } else if (id == leftID) {
        leftID = -1;
        keysDown.left = false;
      }
    });
  }

  add([text("TASO: 3"), pos(125, 280), scale(0.2)]);

  // Question 7

  player.onCollide("A", (A) => {
    let x = A.pos.x;
    let y = A.pos.y;
    destroyAll("A");
    destroyAll("B");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeB++;
    scopeD++;
    scopeE++;
    scopeF++;
    kys31 = true;
  });

  player.onCollide("B", (B) => {
    let x = B.pos.x;
    let y = B.pos.y;
    destroyAll("A");
    destroyAll("B");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeA++;
    scopeC++;
    scopeG++;
    scopeH++;
    kys31 = true;
  });

  // Question 8

  player.onCollide("D", (D) => {
    let x = D.pos.x;
    let y = D.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeA++;
    scopeB++;
    scopeH++;
    kys32 = true;
  });

  player.onCollide("E", (E) => {
    let x = E.pos.x;
    let y = E.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeF++;
    scopeG++;
    kys32 = true;
  });

  player.onCollide("F", (F) => {
    let x = F.pos.x;
    let y = F.pos.y;
    destroyAll("D");
    destroyAll("E");
    destroyAll("F");
    add([pos(x, y), sprite("empty"), area(), solid(), scale(0.4)]);
    scopeC++;
    scopeD++;
    scopeE++;
    kys32 = true;
  });

  player.onCollide("Teleport", (Teleport) => {
    if (kys31 == true && kys32 == true) {
      go("fifthlevel");
    }
  });

  player.onCollide("Death", (Death) => {
    shake(50);
    go("fourthLevel");
  });

  onUpdate("Spider", (Spider) => {
    Spider.move(-15, 0);
  });

  player.onCollide("Spider", (Spider) => {
    shake(10);
    const hitSound = play("hit", {
      volume: 0.01,
      loop: false,
    });
  });

  player.onUpdate(() => {
    camPos(player.pos);
  });

  // Movement

  onKeyDown("left", () => {
    player.move(-playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(true);
  });

  onKeyDown("a", () => {
    player.move(-playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(true);
  });

  onKeyDown("right", () => {
    player.move(playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(false);
  });

  onKeyDown("d", () => {
    player.move(playerMoveSpeed, 0);
    camPos(player.pos);
    player.flipX(false);
  });

  onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyPress("up", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });

  onKeyPress("w", () => {
    if (player.isGrounded()) {
      player.jump(playerJumpForce, 0);
      const jumpSound = play("hyppy", {
        volume: 0.5,
        loop: false,
      });
    }
  });
});

// EndScreen
scene("fifthlevel", () => {
  $("iframe").css("display", "flex");
  $(".linkit").css("display", "flex");

  add([
    sprite("background", { width: width(), height: height() }),
    pos(0, 0),
    fixed(),
  ]);

  add([
    sprite("line", { width: screen.width, height: screen.height }),
    pos(0, 250),
    fixed(),
  ]);

  addLevel(levels[3], {
    width: 20,
    height: 20,
  });

  let endback = add([
    sprite("endback"),
    pos(width() / 2, 190),
    origin("center"),
    scale(0.1216),
    fixed(),
  ]);

  let end = add([
    sprite("end"),
    pos(width() / 2, height() / 2 - 85),
    origin("center"),
    scale(0.07),
    fixed(),
  ]);

  let endbox = add([
    sprite("endbox"),
    pos(width() / 2, height() / 2 - -35),
    origin("center"),
    scale(0.07),
    fixed(),
  ]);

  let endtext = add([
    sprite("endtext"),
    pos(width() / 2, height() / 2 - 43),
    origin("center"),
    scale(0.05),
    fixed(),
    area(),
  ]);

  add([pos(10, 10), sprite("logo"), scale(0.3), fixed()]);

  if (!mobile) {
    add([
      pos(width() / 2, height() - 20),
      origin("center"),
      sprite("ict"),
      scale(0.5),
      fixed(),
    ]);
  } else {
    add([pos(10, 50), sprite("ict"), scale(0.5), fixed()]);
  }

  // Lets find first suitable field
  const ensimmainen = Math.max(
    scopeA,
    scopeB,
    scopeC,
    scopeD,
    scopeE,
    scopeF,
    scopeG,
    scopeH
  );
  if (ensimmainen == scopeA) {
    scopeA = 0;
    add([
      sprite("ala1"),
      pos(width() / 2 - 110, height() / 2 - 20),
      scale(0.3),
    ]);
    onClick(() => {
      window.open(
        "https://www.keuda.fi/ala/humanistiset-taidealat/",
        "_blank"
      );
      console.log("Humanistiset ja taidealat");
    }, false);
  } else if (ensimmainen == scopeB) {
    scopeB = 0;
    add([
      sprite("ala2"),
      pos(width() / 2 - 110, height() / 2 - 20),
      scale(0.3),
    ]);
    onClick(() => {
      window.open(
        "https://www.keuda.fi/ala/kauppa-hallinto-oikeustieteet/",
        "_blank"
      );
      console.log("Kauppa, hallinto ja oikeustieteet");
    }, false);
  } else if (ensimmainen == scopeC) {
    scopeC = 0;
    add([
      sprite("ala3"),
      pos(width() / 2 - 110, height() / 2 - 20),
      scale(0.25),
    ]);
    onClick(() => {
      window.open("https://www.keuda.fi/ala/luonnontieteet/", "_blank");
      console.log("Luonnontieteet");
    }, false);
  } else if (ensimmainen == scopeD) {
    scopeD = 0;
    add([
      sprite("ala4"),
      pos(width() / 2 - 110, height() / 2 - 20),
      scale(0.3),
    ]);
    onClick(() => {
      window.open(
        "https://www.keuda.fi/ala/maa-ja-metsatalousala-myos-puutarha-ala/",
        "_blank"
      );
      console.log("Maa- ja metsätalous");
    }, false);
  } else if (ensimmainen == scopeE) {
    scopeE = 0;
    add([
      sprite("ala5"),
      pos(width() / 2 - 110, height() / 2 - 20),
      scale(0.25),
    ]);
    onClick(() =>
      window.open("https://www.keuda.fi/ala/palvelualat/", "_blank")
    );
  } else if (ensimmainen == scopeF) {
    scopeF = 0;
    add([
      sprite("ala6"),
      pos(width() / 2 - 110, height() / 2 - 20),
      scale(0.25),
    ]);
    onClick(() =>
      window.open("https://www.keuda.fi/ala/tekniikan-alat/", "_blank")
    );
  } else if (ensimmainen == scopeG) {
    scopeG = 0;
    add([
      sprite("ala7"),
      pos(width() / 2 - 110, height() / 2 - 20),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/terveys-hyvinvointialat/",
        "_blank"
      )
    );
  } else if (ensimmainen == scopeH) {
    scopeH = 0;
    add([
      sprite("ala8"),
      pos(width() / 2 - 110, height() / 2 - 20),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/tietojenkasittely-tietoliikenne-ict/",
        "_blank"
      )
    );
  }

  // Lets find second suitable field
  const toinen = Math.max(
    scopeA,
    scopeB,
    scopeC,
    scopeD,
    scopeE,
    scopeF,
    scopeG,
    scopeH
  );
  if (toinen == scopeA) {
    scopeA = 0;
    add([
      sprite("ala1"),
      pos(width() / 2 - 110, height() / 2 - -30),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/humanistiset-taidealat/",
        "_blank"
      )
    );
  } else if (toinen == scopeB) {
    scopeB = 0;
    add([
      sprite("ala2"),
      pos(width() / 2 - 110, height() / 2 - -30),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/kauppa-hallinto-oikeustieteet/",
        "_blank"
      )
    );
  } else if (toinen == scopeC) {
    scopeC = 0;
    add([
      sprite("ala3"),
      pos(width() / 2 - 110, height() / 2 - -30),
      scale(0.25),
    ]);
    onClick(() =>
      window.open("https://www.keuda.fi/ala/luonnontieteet/", "_blank")
    );
  } else if (toinen == scopeD) {
    scopeD = 0;
    add([
      sprite("ala4"),
      pos(width() / 2 - 110, height() / 2 - -30),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/maa-ja-metsatalousala-myos-puutarha-ala/",
        "_blank"
      )
    );
  } else if (toinen == scopeE) {
    scopeE = 0;
    add([
      sprite("ala5"),
      pos(width() / 2 - 110, height() / 2 - -30),
      scale(0.25),
    ]);
    onClick(() =>
      window.open("https://www.keuda.fi/ala/palvelualat/", "_blank")
    );
  } else if (toinen == scopeF) {
    scopeF = 0;
    add([
      sprite("ala6"),
      pos(width() / 2 - 110, height() / 2 - -30),
      scale(0.25),
    ]);
    onClick(() =>
      window.open("https://www.keuda.fi/ala/tekniikan-alat/", "_blank")
    );
  } else if (toinen == scopeG) {
    scopeG = 0;
    add([
      sprite("ala7"),
      pos(width() / 2 - 110, height() / 2 - -30),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/terveys-hyvinvointialat/",
        "_blank"
      )
    );
  } else if (toinen == scopeH) {
    scopeH = 0;
    add([
      sprite("ala8"),
      pos(width() / 2 - 110, height() / 2 - -30),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/tietojenkasittely-tietoliikenne-ict/",
        "_blank"
      )
    );
  }

  // Lets find third suitable field
  const kolmas = Math.max(
    scopeA,
    scopeB,
    scopeC,
    scopeD,
    scopeE,
    scopeF,
    scopeG,
    scopeH
  );
  if (kolmas == scopeA) {
    scopeA = 0;
    add([
      sprite("ala1"),
      pos(width() / 2 - 110, height() / 2 - -75),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/humanistiset-taidealat/",
        "_blank"
      )
    );
  } else if (kolmas == scopeB) {
    scopeB = 0;
    add([
      sprite("ala2"),
      pos(width() / 2 - 110, height() / 2 - -75),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/kauppa-hallinto-oikeustieteet/",
        "_blank"
      )
    );
  } else if (kolmas == scopeC) {
    scopeC = 0;
    add([
      sprite("ala3"),
      pos(width() / 2 - 110, height() / 2 - -75),
      scale(0.25),
    ]);
    onClick(() =>
      window.open("https://www.keuda.fi/ala/luonnontieteet/", "_blank")
    );
  } else if (kolmas == scopeD) {
    scopeD = 0;
    add([
      sprite("ala4"),
      pos(width() / 2 - 110, height() / 2 - -75),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/maa-ja-metsatalousala-myos-puutarha-ala/",
        "_blank"
      )
    );
  } else if (kolmas == scopeE) {
    scopeE = 0;
    add([
      sprite("ala5"),
      pos(width() / 2 - 110, height() / 2 - -75),
      scale(0.25),
    ]);
    onClick(() =>
      window.open("https://www.keuda.fi/ala/palvelualat/", "_blank")
    );
  } else if (kolmas == scopeF) {
    scopeF = 0;
    add([
      sprite("ala6"),
      pos(width() / 2 - 110, height() / 2 - -75),
      scale(0.25),
    ]);
    onClick(() =>
      window.open("https://www.keuda.fi/ala/tekniikan-alat/", "_blank")
    );
  } else if (kolmas == scopeG) {
    scopeG = 0;
    add([
      sprite("ala7"),
      pos(width() / 2 - 110, height() / 2 - -75),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/terveys-hyvinvointialat/",
        "_blank"
      )
    );
  } else if (kolmas == scopeH) {
    scopeH = 0;
    add([
      sprite("ala8"),
      pos(width() / 2 - 110, height() / 2 - -75),
      scale(0.3),
    ]);
    onClick(() =>
      window.open(
        "https://www.keuda.fi/ala/tietojenkasittely-tietoliikenne-ict/",
        "_blank"
      )
    );
  }
});
