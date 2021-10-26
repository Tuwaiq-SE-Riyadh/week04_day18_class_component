import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <FunctionalHelloWorld name="abdulrahman"/>
      <ClassHelloWorld />
    </div>
  );
}
function FunctionalHelloWorld ({name}){

  return (
    <>
    <h1>{name}</h1>
    </>
  )
}

class ClassHelloWorld extends React.Component {
  constructor(){
    super()
    console.log("This is executed before rendering")
  }
  render() {
    
    console.log("rendering");
    return <h1></h1>
  }
  componentDidMount() {
    console.log("This is executed after rendering");
  }
}

export default App;
