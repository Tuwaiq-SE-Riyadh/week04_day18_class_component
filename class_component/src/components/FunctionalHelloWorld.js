import React from 'react';

// function FunctionalHelloWorld(obj)
// {
//     return <p>Hello, <b>{obj.name}</b></p>
// }

// export default FunctionalHelloWorld;

class ClassHelloWorld extends React.Component {
    constructor(props)
    {
        super(props)
        console.log("(This is executed before rendering)")
    }

    componentDidMount() {
        console.log("(This is executed after rendering)")
    }

    render() {
        return <p>Hello, <b>{this.props.name}</b></p>;
    }
    }

    export default ClassHelloWorld;
