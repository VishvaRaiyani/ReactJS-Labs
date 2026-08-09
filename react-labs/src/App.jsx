
// Lab - 1 
import { Component } from "react"

import FunctionDemo from "./Lab-02-Separate-File-Component/FunctionDemo"
import ClassDemo from "./Lab-02-Separate-File-Component/ClassDemo"

import EventDemo from "./Lab-03-Props/EventHandlingDemo"
import PropsDemo from "./Lab-03-Props/PropsDemo"
import ConditionalRenderingDemo from "./Lab-03-Props/ConditionalRenderingDemo"
import PropsUsingCard from "./Lab-03-Props/PropsUsingCard"

// WAP to create a simple class component in ReactJS.
class DemoClass extends Component{
  render(){
    return(
      <>
        <h1>This is Class Component.</h1>
      </>
    )
  }
}

// WAP to create a simple function component in ReactJS.
function DemoFunction(){
  return(
    <>
      <h1>This is Function Component.</h1>
    </>
  )
}

function App() {
  return (
    <>
      {/* Lab - 01 */}
      {/* <DemoClass/>
      <DemoFunction/> */}

      {/* Lab - 02 */}
      {/* <FunctionDemo/>
      <ClassDemo/> */}
      
      {/* Lab - 03 */}
      {/* <EventDemo/>
      <PropsDemo/>
      <ConditionalRenderingDemo/> */}
      <PropsUsingCard/>
    </>
  )
}

export default App
