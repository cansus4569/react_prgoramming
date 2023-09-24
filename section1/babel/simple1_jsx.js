function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "Cancel Like" : "This Like!";
  return /*#__PURE__*/React.createElement("button", {
    onClick: () => setLiked(!liked)
  }, text);
}
function Container() {
  const [count, setCount] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(LikeButton, null), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, "Current Count: "), /*#__PURE__*/React.createElement("span", {
    style: {
      marginRight: 10,
      color: 'red'
    }
  }, count), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count + 1)
  }, "Add"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setCount(count - 1)
  }, "Sub")));
}
const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(Container), domContainer);