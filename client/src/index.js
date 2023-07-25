import React from "react";
import { createRoot } from "react-dom/client";
import { io } from 'socket.io-client'

const Main = () => {
  const socket = io();
  return (
    <div>
      <h1>hello!</h1>
      <p>this is a test</p>
    </div>
  );
};

const domNode = document.getElementById("main");
const root = createRoot(domNode);
root.render(<Main />);
