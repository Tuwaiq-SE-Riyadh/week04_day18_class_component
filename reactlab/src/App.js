import logo from './logo.svg';
import './App.css';

import react from "react"

//
// # Functional and class component Lab

// * create `FunctionalHelloWorld` 
//     * it should be functional component
//     * it will recive a props called name with a string vlaue 
//     * it will render the name into the page 

// * conver the `FunctionalHelloWorld`  into class component called `ClassHelloWorld`.

// * use one of the life cycle methods to print `This is executed before rendering` to the console before rendering the page. 

// * use another life cycle methods to print `This is executed after rendering` to the console after rendering the page. 
function FunctionalHelloWorld(props) {
  return <p>{props.name}</p>
  
}

class ClassHelloWorld extends react.Component{
  componentWillMount() {
    console.log("This is executed before rendering");
  }
  render(){
    return <p>{this.props.name}</p>;
  }
  componentDidMount() {
    console.log("This is executed after rendering");
  }
}
function App() {
  return (
    <>
      <FunctionalHelloWorld name= "Hello World from functional component"/>
      <ClassHelloWorld name = "Hello World from class component"/>
      </>
    );
}


export default App;
