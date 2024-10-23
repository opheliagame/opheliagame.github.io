"use client";

import { ReactP5Wrapper, Sketch, SketchProps } from "@p5-wrapper/react";

type Props = {
  sketch: Sketch<SketchProps> | undefined;
};

const P5Sketch = ({ sketch }: Props) => {

  return <>
  <ReactP5Wrapper
    fallback={<h1>No sketch selected yet.</h1>}
    sketch={sketch}
  />;
  </>
  
};

export default P5Sketch;
