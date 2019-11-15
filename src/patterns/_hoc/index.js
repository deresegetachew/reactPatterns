/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";

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

const HocPattern = props => {
  return (
    <div
      id="container"
      css={css`
        ${container}
      `}
    >
      <div
        css={css`
          ${navbarcontainer}
        `}
      />
      <div
        css={css`
          ${description}
        `}
      >
        <h1>Combined Patterns</h1>
        <p>Combining the different patterns together</p>
        <p>When to use ?</p>
        <p>what is great about it ?</p>
        <p>What sucks about it</p>
      </div>
    </div>
  );
};

export default HocPattern;
