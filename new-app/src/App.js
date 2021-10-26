import React from 'react';
import './App.css';

// function HelloWorld(props) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h4>{props.value}</h4>
//       </header>
//     </div>
//   );
// }

class HelloWorld extends React.Component{

  constructor(props){
    super(props)

     this.testbefore()
  }
  render(){
    return(
    <div className="App App-header">
      <h4>{this.props.value}</h4>
    </div>
  
    );
  }

  testbefore() {
    
    console.log("This is executed before rendering")
    }
    componentDidMount(){

      console.log("This is executed after rendering")
    }
}

export default HelloWorld;
