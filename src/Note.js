import React from "react";
import "./styles1.css";
function Note(props) {
  return (
    <div classsName="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
export default Note;
