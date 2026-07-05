// Only executed our code once the DOM is ready.
paper.install(window);
window.onload = function () {
  // Setup directly from canvas id:
  paper.setup("paper-canvas");

  const colors = ["red", "pink", "green", "blue"];
  let nSegment = 10;
  function makeTimeString() {
    let sString = new Path({ strokeColor: "white" });

    for (let i = 0; i < nSegment; i++) {
      let x = Math.random() * view.size.width - view.size.width / 2;
      let y = Math.random() * view.size.height - view.size.height / 2;

      sString.add({ x: x, y: y });
    }
    sString.translate(view.center);
    sString.smooth({ type: "continuous" });
    return sString;
  }

  function addPoint(path) {
    let x =
      Math.random() * view.size.width - view.size.width / 2 + view.center.x;
    let y =
      Math.random() * view.size.height - view.size.height / 2 + view.center.y;
    path.add({ x: x, y: y });
    path.smooth({ type: "continuous" });
  }

  let nString = 2;
  let sStrings = [];

  for (let i = 0; i < nString; i++) {
    let string1 = makeTimeString();
    sStrings.push(string1);
  }

  let offset = 0;
  view.onFrame = function (event) {
    if (event.count % 100 == 0) {
      sStrings.forEach((p1) => addPoint(p1));
    }

    if (offset > sStrings[0].length) return;
    let cgroup = new Group();
    for (let i = 0; i < sStrings.length; i++) {
      let string1 = sStrings[i];

      let p = string1.getPointAt(offset);

      let c = new Path.Circle(p, 3);
      c.fillColor = colors[Math.floor(Math.random() * colors.length)];
      cgroup.addChild(c);
    }
    setTimeout(() => {
      cgroup.remove();
    }, 1000);
    offset += 10;

    // create intersections
    if (event.count % 200 == 0) {
      let p1 = sStrings[0];
      let p2 = sStrings[1];

      if (!p1.intersects(p2)) return;

      let tShape = p1.intersect(p2);
      // tShape.strokeColor = 'blue'
      let tPath = new Path(tShape.pathData);

      let shape1 = new Path({ strokeColor: "purple" });
      let rStart = Math.floor((Math.random() * tPath.segments.length) / 2);
      for (
        let i = rStart, count = 0;
        i < tPath.segments.length && count < 4;
        i++, count++
      ) {
        shape1.add(tPath.segments[i]);
      }

      let tRect = shape1.strokeBounds;
      let tShapeD = new Path.Rectangle(tRect);
      // tShapeD.strokeColor = 'red'
      let tPoint = tRect.point;

      let t1 = new PointText({
        point: tPoint,
        content: "time"[Math.floor(Math.random() * 4)],
        fontFamily: "Courier New",
        // fontWeight: 'light',
        fontSize: 24,
      });
    }
  };
};
