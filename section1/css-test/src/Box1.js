import React from "react"
import Style from "./Box.module.css"
import cn from "classnames"

export default function Box1({ size }) {
  const isBig = size === "big"
  return (
    <div
      className={cn(Style.box, {
        [Style.big]: isBig,
        [Style.small]: !isBig,
      })}
    >
      {isBig ? "큰 박스" : "작은 박스"}
    </div>
  )
  // if(size === 'big') {
  //     return <div className={cn(Style.box, Style.big)}>큰 박스</div>
  // } else {
  //     return(
  //         <div className={cn(Style.box, Style.small)}>작은 박스</div>
  //     )
  // }
}
