import { palette } from "./design";
import { random } from "./utils";

// display words in a text spaced out and tokenized with rita.js
export function spaceOut(text1, g, isbgwhite = false, minTextSize, maxTextSize) {
  let can = g ?? this;

  // var words = RiTa.tokenize(text1);
  var words = text1.split(' ')
  // .filter(token => RiTa.isNoun(token));
  minTextSize = minTextSize != null ? minTextSize : 64 * 2.5;
  maxTextSize = maxTextSize != null ? maxTextSize : 100 * 2.5;

  can.push();
  let remw = g.width;
  let remh = g.height;
  can.textSize(minTextSize);
  can.translate(0, minTextSize);
  // remh = remh - minTextSize
  let currTextHeight = minTextSize;
  for (let i = 0; i < words.length; i++) {
    if (remh < minTextSize) {
      // console.log(i)
      continue;
    }

    let word = words[i];

    let space = Math.floor(random(2, 3));
    let textHeight = random(minTextSize, maxTextSize);
    currTextHeight = textHeight > currTextHeight ? textHeight : currTextHeight;
    can.textSize(textHeight);
    let currw = can.textWidth(word);
    let w = can.textWidth(word + " ".repeat(space));

    if (remw < w) {
      let xoff = random(minTextSize, maxTextSize);
      can.translate(-(g.width - remw) + xoff, currTextHeight);
      remw = g.width - xoff;
      remh = remh - currTextHeight;
    }

    // BG RECT

    if (isbgwhite) {
      can.fill("white");
      can.noStroke();
      can.rectMode(can.CENTER);
      // for inside pages
      can.rect(w / 2, 0, w, textHeight);
    } else {
      // for front page
      let rc = palette[Math.floor(random(0, palette.length))];
      can.fill(rc);
      rc = palette[Math.floor(random(0, palette.length))];
      can.strokeWeight(3);
      can.stroke(rc);
      can.rect(0, 0, currw, textHeight);
    }

    // TEXT
    // let isNoun = RiTa.isNoun(word);
    // let c = isNoun ? "blue" : "whitesmoke";
    // let c = "white";
    // can.fill('black');
    // if (isNoun) {
    //   can.textFont("Playpen Sans");
    // } else {
    //   can.textFont("Mingzat");
    // }

    let rc = palette[Math.floor(random(0, palette.length))];
    can.fill(rc);
    rc = palette[Math.floor(random(0, palette.length))];
    can.stroke(rc);
    can.translate(w / 2, 0);
    can.textAlign(can.CENTER, can.CENTER);
    can.text(word, 0, 0);

    can.translate(w / 2, 0);

    remw -= w;
  }
  can.pop();
}


