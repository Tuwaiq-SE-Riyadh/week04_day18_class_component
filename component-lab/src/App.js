import './App.css';
import React from 'react'


function App() {
  return (
    <>
    
    <div className="App">
    <FunctionalHelloWorld name="Manal" />
    
    <ClassHelloWorld name="Tuwaiq 1000" />
    </div>
    </>
  );
}

function FunctionalHelloWorld(props) {
  return <h1>{props.name}</h1>;
  }

class ClassHelloWorld extends React.Component{
  constructor(props) {
    super(props);

    console.log("This is executed before rendering")
  }

   componentDidMount(){
    console.log("This is executed after rendering");
  }



 
  render(){
    return (
    <p>{this.props.name} {console.log("render")}</p> 

    
    )}

} 

export default App;
