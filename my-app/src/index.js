// import React and ReactDOM libraries

import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
  const title = { text: "Hello there!" };
  const style = { backgroundColor: "green", color: "white" };

  return (
    <div>
      <h1 className="title" style={style}>
        {title.text}
      </h1>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
