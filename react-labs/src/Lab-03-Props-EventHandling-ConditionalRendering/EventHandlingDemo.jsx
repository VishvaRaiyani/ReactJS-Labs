import React from "react";

// Method-01 onClick Event
function handleClick() {
  alert("Button Clicked!");
}

// Method-02 onDoubleClick Event
function handleDoubleClick() {
  alert("Button Double Clicked!");
}

// Method-03 onMouseEnter and onMouseLeave Event
function handleMouseEnter() {
  console.log("Mouse Entered");
}

function handleMouseLeave() {
  console.log("Mouse Left");
}

// Method-04 onChange Event
function handleChange(event) {
  console.log("Input:", event.target.value);
}

export default function EventDemo() {
  return (
    <div>
      <h2>Lab-03 Event Handling</h2>

      {/* Method-01 onClick */}
      <button onClick={handleClick}>Click Me</button>

      <br />
      <br />

      {/* Method-02 onDoubleClick */}
      <button onDoubleClick={handleDoubleClick}>
        Double Click Me
      </button>

      <br />
      <br />

      {/* Method-03 onMouseEnter and onMouseLeave */}
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: "200px",
          height: "60px",
          backgroundColor: "lightblue",
          textAlign: "center",
          lineHeight: "60px",
        }}
      >
        Hover Me
      </div>
      <br />

      {/* Method-04 onChange */}
      <input
        type="text"
        placeholder="Enter Name"
        onChange={handleChange}
      />
    </div>
  );
}
