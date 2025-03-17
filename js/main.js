import World from "./world/world.js";

function main() {
  const container = document.querySelector("canvas.webgl");

  const world = new World(container);

  world.animate();
}

main();
