/// ---------- SETUP ----------
const hydraCanvas = document.getElementById("hydra-canvas");
const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  autoLoop: true,
});

s0.initImage("https://pbs.twimg.com/media/F__1R9AbsAAzihq.jpg");

src(s0)
  .color(1, 0, 0)
  .scale([3, 2, 1], 2)
  .modulate(
    src(s0)
      .color(0, 1, 1)
      .rotate(() => (time % 360) + Math.sin(time * 2)),
    1,
  )
  .scale([Math.random() * 5, Math.random() * 5, Math.random() * 5], 0.5)
  .out();
