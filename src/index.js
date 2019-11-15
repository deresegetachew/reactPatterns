/** @jsx jsx */
import React from "react";
import ReactDOM from "react-dom";
import { jsx, css } from "@emotion/core";
import CombinedPattern from "./patterns/_combinedPatterns/index";
import "./index.css";

const container = css`
  perspective: 600px;
  width: 700px;
  height: 360px;
  display: block;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  background: #ffffff73;
  margin-bottom: 5px;
  justify-content: space-around;
  align-items: center;
  align-content: space-around;
`;

const description = css`
  font-size: 14px;
  display: block;
  float: right;
  text-align: left;
  width: 400px;
  margin-top: 15px;

  p {
    font-weight: 100;
    font-size: 12px;
  }
`;

const navbarcontainer = css`
  font-size: 12px;
  background-color: #2a394f;
  border-radius: 4px;
  display: block;
  width: 225px;
`;

function App() {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <h1>React Patterns</h1>

      <CombinedPattern />
      {/* <div>
        <p>1. With out any Patterns</p>
        <p>2. HOC Pattern</p>
        <p>3. Hooks</p>
      </div> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
