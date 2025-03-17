import * as THREE from "three";
import My3DText from "../mesh/text/my-3D-text.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import FeltMaterial from "../material/felt-material.js";
import { random } from "../../utils/math.js";
import palette from "../../colors/palette.js";
import { convertHexToVec3 } from "../../utils/colors.js";

class Scene2 extends THREE.Group {
  constructor() {
    super();
    this.isLoaded = false;
    this.items = [
      { text: "opheliagame", link: "/" },
      { text: "code", link: "/garden" },
      { text: "projects", link: "/garden/projects" },
      { text: "poems", link: "/garden/poems" },
      { text: "tools", link: "/garden" },
      { text: "community", link: "/garden" },
      // { text: "performance", link: "/garden" },
      { text: "archives", link: "/garden" },
      { text: "software", link: "/garden" },
    ];
  }

  async load() {
    console.log("Loading scene 2");
    return new Promise((resolve, reject) => {
      const fontLoader = new FontLoader();
      fontLoader.load("fonts/Barriecito_Regular.json", (font) => {
        this.font = font;
        this.isLoaded = true;

        console.log("making words");
        let x = window.innerWidth > 1000 ? -200 : 0;
        let y = 500;
        for (let item of this.items) {
          const randomColor = random(palette);
          const material = new FeltMaterial(convertHexToVec3(randomColor), 100);

          const text = new My3DText(item.text, font, 100, 0, 0, 0, material);
          text.position.x = x;
          text.position.y = y;
          text.position.z = 10;
          text.userData = item;
          this.add(text);

          if (window.innerWidth > 1000) {
            x += 100;
          }
          y -= 150;
        }

        resolve();
      });
    });
  }

  async run(threeScene, sizes, camera) {
    await this.load();

    return new Promise((resolve, reject) => {
      console.log("Running scene 2");
      threeScene.add(this);
      resolve();
    });
  }
}

export default Scene2;
