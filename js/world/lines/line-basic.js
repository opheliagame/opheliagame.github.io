import * as THREE from "three";

import { Line2 } from "three/addons/lines/Line2.js";
import { LineGeometry } from "three/addons/lines/LineGeometry.js";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";

class LineBasic extends Line2 {
  constructor(points) {
    // super()
    // this.geometry = new THREE.BufferGeometry().setFromPoints(points)
    // this.material = new THREE.LineBasicMaterial( { color: 0xff0000 })

    let positions = [];
    for (let i = 0; i < points.length; i++) {
      let p = points[i];
      positions.push(p.x, p.y, p.z);
    }

    const geometry = new LineGeometry();
    geometry.setPositions(positions);

    const material = new LineMaterial({
      color: 0xffffff,
      linewidth: 8, // in world units with size attenuation, pixels otherwise
      vertexColors: false,

      //resolution:  // to be set by renderer, eventually
      dashed: false,
      alphaToCoverage: true,
    });
    material.resolution.set(window.innerWidth, window.innerHeight);

    super(geometry, material);
  }

  render() {}
}

export default LineBasic;
