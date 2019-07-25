import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ButtonElection from './components/ButtonElect';
import { configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

class App extends React.Component {
   render() {
      return (
         <>
            <Nav />
            <ButtonElection />
         </>
      );
   }
}


/*
 function App() {
 
return (
    <div className="App">
     
       <Nav/>  
      <ButtonElect/>
     </div>

  );
}
*/



export default App;

