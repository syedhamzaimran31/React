import React, { useState, useEffect } from "react";

function Text() {
  const [text, setText] = useState("");
  const getText = (event) => setText(event.target.value);
  useEffect(
    () => {
      // Use when Component is Mounting
      console.log("MOUNTED");
      return () => {
        // Use when Component is UnMounting
        console.log("UnMounted");
      };
    },
    [
      // Use when Component is Updating
    ]
  );
  return (
    <div>
      <input type="text" onChange={getText} />
      <h1>{text}</h1>
    </div>
  );
}

export default Text;
