import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Blog from "./App";

const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));
