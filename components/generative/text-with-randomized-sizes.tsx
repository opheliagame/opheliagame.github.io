"use client"

import { CSSProperties, useState } from "react"
import { seedRandom } from "../../lib/utils"

type Props = {
  children: string,
  // text: string,
  min: number,
  max: number,
  backgroundColors?: string[],
  hasBorder?: boolean,
}

const TextWithRandomizedSizes = ({children, min, max, backgroundColors, hasBorder}: Props) => {
  const [seed, setSeed] = useState<number>(Math.random());
  const random = seedRandom(seed)

  return <>
    <div className="flex flex-row justify-center flex-wrap">
    {children.split('').map((l, index) => {
      const size = random() * (max-min) + min
      const backgroundColor = backgroundColors != null ? backgroundColors[Math.floor(random() * backgroundColors?.length)] : undefined
      
      let style: CSSProperties = {fontSize: size, backgroundColor: backgroundColor, border: hasBorder == true ? "solid 2px white" : "undefined"}
      // TODO convert all kinds of whitespace to &nbsp;
      let s = l == ' ' ? <span>&nbsp;</span> : <span>{l}</span>

      
      return <div key={index} style={style} className="flex flex-col justify-center">{s}</div>
      

    })}
    
    </div>
    
  </>


}

export default TextWithRandomizedSizes