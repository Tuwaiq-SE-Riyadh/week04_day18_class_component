import './App.css';
import FunctionalHelloWorld from './FunctionalHelloWorld.js';
import ClassHelloWorld from './ClassHelloWorld.js';


function App() {
  return (
    <div>
<FunctionalHelloWorld name={"Tameem from functional component"}/>
<ClassHelloWorld name={"Tameem from class component"}/>
    </div>
  );
}

export default App;
