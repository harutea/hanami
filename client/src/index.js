import React from "react";
import { createRoot } from "react-dom/client";
import { io } from "socket.io-client";
import HanamiScene from "./scene.js";

const App = () => {
  const socket = io();
  return (
    <div>
      <h1>hello!</h1>
      <p>this is a test</p>
      <HanamiScene />
    </div>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
