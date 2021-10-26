
import React from "react";

function App() {
 
  
  return(  
   <div>
    <FunctionalHelloWorld name="shahad"/>
    <ClassHelloWorld name="shahad"/>
  
   </div>
  );
 
}

function FunctionalHelloWorld(props){
return (<h3>{props.name}</h3>);
}

class ClassHelloWorld extends React.Component{
  constructor(props) {
    super(props);
    console.log("This is executed before rendering");
   
  }
  componentDidMount(){
    console.log("This is executed after rendering");
  }
  render(){
    console.log("This is executed while rendering");
    return (<h3>{this.props.name}</h3>);}

   
}

export default App;

