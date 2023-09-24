function LikeButton() {
  const [liked, setLiked] = React.useState(false)
  const text = liked ? "Cancel Like" : "This Like!"

  return <button onClick={() => setLiked(!liked)}>{text}</button>
}

function Container() {
  const [count, setCount] = React.useState(0)
  return (
    <div>
      <LikeButton />
      <div>
        <span>Current Count: </span>
        <span style={{ marginRight: 10, color:'red' }}>{count}</span>
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Sub</button>
      </div>
    </div>
  )
}

const domContainer = document.getElementById("root")
ReactDOM.render(React.createElement(Container), domContainer)
