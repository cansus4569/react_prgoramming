import React from "react"
import style from "./Button.module.scss"
import cn from "classnames"

export default function Button2({ size }) {
  const isBig = size === "big"
  return (
    <button
      className={cn(style.button, {
        [style.big]: isBig,
        [style.small]: !isBig,
      })}
    >
      {isBig ? "큰 버튼" : "작은 버튼"}
    </button>
  )
}
