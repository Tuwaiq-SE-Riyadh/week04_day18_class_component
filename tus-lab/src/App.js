//import logo from './logo.svg';
import './App.css';
import React from "react"

function App() {
  return (<div className="App"> 
    <HelloWorld name="Sarah" />  
    </div>
  );
}

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
   
  }
  //This method executed before rendering 
  componentWillMount(){
    console.log('This is executed before rendering');
  }
//This method executed after rendering 
  componentDidMount() {
    console.log('This is executed after rendering');
    
  }
  render() { 
    return <h1>Hello, {this.props.name}</h1>; 
  }

 
}

export default App;
