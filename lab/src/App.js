import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  let name="Amal"
  return (
    <>
    
    <FunctionHelloWorld  name={name}/>
    <CfunctionHelloWorld  name={name}/>
    </>
  );
}

function FunctionHelloWorld(props) {
  
  return (
    
      <>
     <h3>Hello, i am {props.name} in FunctionHelloWorld</h3>
     
      </>
     
  );
  
}



class CfunctionHelloWorld extends React.Component {

  constructor(props){  
    {console.log("This is executed befor rendering");}
    super(props);  }

 
  componentDidMount(){
    console.log("This is executed after rendering")
  }

  render() {
    {console.log("in render")}
    return <h3>Hello,  i am {this.props.name} in class FunctionHelloWorld</h3>;
  }




}



export default App;
