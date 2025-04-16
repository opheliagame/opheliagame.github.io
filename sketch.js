let textBox;
let scriptIndex = 0;
let imgs = [];
let myFont;

let isScene2 = false;

let seed = Math.random() * 1000;

function preload() {
  let img1 = loadImage("images/flower1.png");
  let img2 = loadImage("images/flower2.png");
  let img3 = loadImage("images/flower3.png");
  let img4 = loadImage("images/flower4.png");
  imgs.push(img1, img2, img3, img4);

  myFont = loadFont("Basteleur-Bold.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight, document.querySelector("#bg-canvas"));
  imageMode(CENTER);
  rectMode(CENTER);

  let boxw = windowWidth > 600 ? (width * 2) / 3 : width;
  let boxh = windowHeight > 600 ? (height * 2) / 3 : height;

  textBox = new TextBox({
    x: 0,
    y: 0,
    width: boxw,
    height: boxh,
    fontName: myFont,
    boxColor: "transparent",
    boxBorderColor: "transparent",
    textColor: "white",
    textStrokeColor: "black",
    textStrokeWeight: 3,
  });
  textBox.setText(script[scriptIndex].content);
}

function draw() {
  randomSeed(seed);
  background("black");

  if (frameCount >= 5000) {
    noLoop();
  }

  if (frameCount % 60 == 0) {
    seed = Math.random() * 1000;
    randomSeed(seed);

    // after last item, set textbox string to ""
    if (scriptIndex == script.length - 1) {
      textBox.setText("   ");

      if (isScene2 == false) {
        showPageLinks();
        isScene2 = true;
      }
    }

    if (scriptIndex < script.length - 1) {
      scriptIndex = scriptIndex + 1;
      textBox.setText(script[scriptIndex].content);
    }
  }

  let xres = 3;
  let yres = 3;
  let xedge = width / xres;
  let yedge = height / yres;

  for (let i = 0; i < xres; i++) {
    for (let j = 0; j < yres; j++) {
      let x = (i / xres) * width;
      let y = (j / yres) * height;

      push();
      translate(x, y);
      translate(xedge / 2, yedge / 2);
      scale(2.4);
      strokeWeight(2);

      let imgindex = floor(random(imgs.length));
      let img = imgs[imgindex];
      image(img, 0, 0, img.width, img.height);
      pop();
    }
  }

  push();
  translate((width - (width * 2) / 3) / 2, (height - (height * 2) / 3) / 2);
  textBox.draw(this);
  pop();
}

function showPageLinks() {
  document.querySelector(".links-container").style.display = "flex";
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let script = [
  {
    content: "Hi Hi Hi",
  },
  {
    content: "I am opheliagame",
    media: ["2024me.jpeg", "anushka.jpg", "githubme.jpeg", "imli.jpeg"],
  },
  {
    content: "and this is my virtual studio",
    media: [],
  },
  {
    content: "Have we met before?",
  },
  {
    content: "Maybe you already know that",
  },
  {
    content: "I make generative things",
    duration: 5,
    media: [
      "20241103-generative-study.mp4",
      "20210225-generative-study.mp4",
      "20201216-shape-study.mp4",
    ],
  },
  {
    content: "and think about",
  },
  {
    content: "color",
    duration: 5,
    media: [
      "20200611-color-study.jpg",
      "20210714-color-study.mp4",
      "20210709-color-study.jpg",
    ],
  },
  {
    content: "movement",
    duration: 5,
    media: [
      "20241122-movement-study.mp4",
      "20200628-movement-study.mp4",
      "20200728-movement-study1.mp4",
    ],
  },
  {
    content: "lines",
    duration: 5,
    media: [
      "20240112-line-study.mp4",
      "20231011-line-study.mp4",
      "20200614-line-study.jpg",
    ],
  },
  {
    content: "type",
    duration: 5,
    media: [
      "20210615-type-study.mp4",
      "20210605-type-study.mp4",
      "20201020-type-study.mp4",
      "20210323-type-study.mp4",
    ],
  },
  {
    content: "about software",
  },
  {
    content: "about language",
  },
  {
    content: "about archives",
  },
  {
    content: "about storytelling",
  },
  {
    content: "I write code",
  },
  {
    content: "and poems",
  },
  {
    content: "and websites",
  },
  {
    content: "I l(a)ive code visuals",
  },
  {
    content: "sometimes alone",
  },
  {
    content: "sometimes with shaders",
  },
  {
    content: "a lot of times with other live coders",
  },
  {
    content: "welcome! and make yourself at home",
  },
];
