import React from "react";

// Method-01 Using Ternary Operator
function DisplayMessage(props) {
  return (
    <div>
      {props.isDisplay ? <h3>React is Visible</h3> : <h3>React is Hidden</h3>}
    </div>
  );
}

// Method-02 Using Logical AND (&&)
// function DisplayMessage(props) {
//   return (
//     <div>
//       {props.isDisplay && <h3>React is Visible</h3>}
//     </div>
//   );
// }

// Method-03 Using if-else
// function DisplayMessage(props) {
//   if (props.isDisplay) {
//     return <h3>React is Visible</h3>;
//   } else {
//     return <h3>React is Hidden</h3>;
//   }
// }

// Method-04 Using Element Variable
// function DisplayMessage(props) {
//   let content;

//   if (props.isDisplay) {
//     content = <h3>React is Visible</h3>;
//   } else {
//     content = <h3>React is Hidden</h3>;
//   }

//   return <div>{content}</div>;
// }

export default function ConditionalRenderingDemo() {
  return (
    <div>
      <h2>Lab-04 Conditional Rendering</h2>

      <p>isDisplay = true</p>
      <DisplayMessage isDisplay={true} />

      <p>isDisplay = false</p>
      <DisplayMessage isDisplay={false} />
    </div>
  );
}