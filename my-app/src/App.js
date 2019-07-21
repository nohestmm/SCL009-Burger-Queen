import React from 'react';
import './App.css';
import Nav from './components/Nav';
import ButtonElect from './components/ButtonElect';
import Total from './components/Total';


class App extends React.Component {
 render(){
    return(
  <>     
 <Nav/> 
 <ButtonElect />
 <Total />
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

