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
  }

   componentDidMount(){
    console.log("This is executed after rendering");
  }

  componentWillUnmount(){
    console.log("This is executed before rendering");
  }

 
  render(){return <p>{this.props.name}</p> }

} 

export default App;
