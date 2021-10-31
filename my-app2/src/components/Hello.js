
import React from "react";

class HelloWorld extends  React.Component{
    constructor(props) {
      super(props);
     console.log(1);
    }
    componentDidMount() {
      console.log(2);
    }
    render(){
    return (
      <div className="App">
        <h1>Hello, world!</h1>
          <h2>It is {this.props.name} .</h2>
        {/* <Ltem1 araay= {this.state.araay} /> */}
        {/* <HelloWorld name=""nn/> */}
        {console.log(3)}
        {/* {this.props.componentDidMount} */}
      </div>
     
    );
  }}

  export default HelloWorld;