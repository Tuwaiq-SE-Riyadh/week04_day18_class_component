import React from 'react';


function FunctionalHelloWorld(propse) {
  return (
    <>
    <div>
        <h1>Hello {propse.name} From functinal Component</h1>
        <ClassHelloWorld name={propse.name}/>
    </div>
    </>
  );
}

export default FunctionalHelloWorld;

// convert the functional component into class component
class ClassHelloWorld extends React.Component {
    // the constructer will be run before render
    constructor(props) {
        super(props);
        console.log("This is executed before rendering");
      }
    // after constructor the render method will run
    render() {
        console.log("i am from render")
      return <h1>Hello {this.props.name} From class Component</h1>;
    }
    // after that the componentDidMount method will run
    componentDidMount(){
        console.log("This is executed after rendering")
    }
  }
