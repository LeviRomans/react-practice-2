//Create a react app from scratch.
import React from "react";
import ReactDOM from "react-dom";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const creator = "Chip's Chimney";

ReactDOM.render(
  <div>
    <p>Created by {creator}</p>
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
