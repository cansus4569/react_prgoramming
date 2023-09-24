function LikeButton() {
  const [liked, setLiked] = React.useState(false)
  const text = liked ? "Cancel Like" : "This Like!"

  return React.createElement("button", { onClick: () => setLiked(!liked) }, text)
}

// 하나의 DOM에 여러 컴포넌트를 추가하는 방법 (일반적인)
// const domContainer = document.getElementById("root")
// ReactDOM.render(
//   React.createElement(
//     "div",
//     null,
//     React.createElement(LikeButton),
//     React.createElement(LikeButton),
//     React.createElement(LikeButton)
//   ),
//   domContainer
// )

// 여러 DOM 에 컴포넌트를 추가하는 방법 (비추천))
// const domContainer1 = document.getElementById("root1")
// ReactDOM.render(React.createElement(LikeButton), domContainer1)
// const domContainer2 = document.getElementById("root2")
// ReactDOM.render(React.createElement(LikeButton), domContainer2)
// const domContainer3 = document.getElementById("root3")
// ReactDOM.render(React.createElement(LikeButton), domContainer3)

// React.createElement(
//   "div",
//   null,
//   React.createElement("p", null, "hello"),
//   React.createElement("p", null, "world")
// )

function Container() {
  const [count, setCount] = React.useState(0)
  return React.createElement(
    "div",
    null,
    React.createElement(LikeButton),
    React.createElement(
      "div",
      { style: { marginTop: 20 } },
      React.createElement("span", null, "Current Val: "),
      React.createElement("span", { style: { marginRight: 10 } }, count),
      React.createElement("button", { onClick: () => setCount(count + 1) }, "Add"),
      React.createElement("button", { onClick: () => setCount(count - 1) }, "Sub")
    )
  )
}

const domContainer = document.getElementById("root")
ReactDOM.render(React.createElement(Container), domContainer)
