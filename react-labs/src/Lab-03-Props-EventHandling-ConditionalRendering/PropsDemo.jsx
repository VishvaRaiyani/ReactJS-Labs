import React from 'react'

// Method-01 Passing Multiple Props
function Student(props){
    return(
        <dir>
            <h3>Student Details</h3>
            <p>Name: {props.name}</p>
            <p>Branch: {props.branch}</p>
            <p>Semester: {props.semester}</p>
        </dir>
    )
}

//Method-02 Destructring Props
// function Student({ name, branch, semester }) {
//   return (
//     <div>
//       <h3>Name: {name}</h3>
//       <p>Branch: {branch}</p>
//       <p>Semester: {semester}</p>
//     </div>
//   );
// }

// Method-03 Passing object as props 

// function Student({ student }) {
//   return (
//     <div>
//       <p>{student.name}</p>
//       <p>{student.branch}</p>
//     </div>
//   );
// }

// export default function PropsDemo(){
//     const data = { name: "Vishwa", branch: "CSE" };
//     return(
//         <Student student={data} />
//     )
// }



// Method-04 Default Props

// function Student({ name = "Unknown" }) {
//   return <h3>{name}</h3>;
// }


export default function PropsDemo() {
    return (
        <div>
            <h2>Lab-02 Props</h2>
            <Student name="Vishva" branch="CSE" semester="5"/>
            <Student name="ABC" branch="CSE" semester="5"/>
        </div>
  )
}
