import React from "react"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Rooms from "./Rooms"

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 20, border: "5px solid gray" }}>
        <Link to="/">홈</Link>
        <br />
        <Link to="/photo">사진</Link>
        <br />
        <Link to="/rooms">방 소개</Link>
        <br />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="photo" element={<Photo />} />
          <Route path="rooms/*" element={<Rooms />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

function Home() {
  return <h2>이곳은 홈페이지입니다.</h2>
}

function Photo() {
  return <h2>여기서 사진을 감상하세요.</h2>
}
