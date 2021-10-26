import logo from './logo.svg';
import './App.css';
import React from 'react';


function App() {
  
  return (
    <>
      <ClassHelloWorld/>
    </>
  );
}

class ClassHelloWorld extends React.Component{
  FunctionalHelloWorld(props){
    
     return <h1>Hello World, I am {props.name}</h1>
  }
  
  
  componentDidMount(){
    console.log("This is executed after rendering");
  
  }
  render(){
    console.log("inside render");
    return <this.FunctionalHelloWorld name={"Nasser"}/>
}

constructor(){
  super()
  console.log("This is executed before rendering");
}

}
export default App;
