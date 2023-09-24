import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import Box from "./Box"
import Button from "./Button"
import Box1 from "./Box1"
import Button1 from "./Button1"
import Box2 from "./Box2"
import Button2 from "./Button2"
import Box3 from "./Box3"
import Button3 from "./Button3"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <div>
    {/* css */}
    <Button size="big" />
    <Button size="small" />
    <Box size="big" />
    <Box size="small" />

    {/* css-module */}
    <Button1 size="big" />
    <Button1 size="small" />
    <Box1 size="big" />
    <Box1 size="small" />

    {/* sass */}
    <Button2 size="big" />
    <Button2 size="small" />
    <Box2 size="big" />
    <Box2 size="small" />

    {/* css-in-js */}
    <Button3 size="big" />
    <Button3 size="small" />
    <Box3 size="big" />
    <Box3 size="small" />
  </div>
)
