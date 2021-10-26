import R from 'react'
class ClassHelloWorld extends R.Component{
    constructor(props) {
        super(props);
        console.log("This is executed before rendering");
      }

    render() {
      return <div><p>{this.props.name}</p></div>;
    }

    componentDidMount() {
        console.log("This is executed after rendering");

    }
}

  


  export default ClassHelloWorld;
  