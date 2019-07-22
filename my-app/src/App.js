import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ThemeHome from './components/ThemeHome'
import ThemeKitchen from './components/ThemeKitchen'
import ThemeOrder from './components/ThemeOrder'



//import logo from './logo.svg';
//import './App.css';
//import Nav from './components/Nav';
//import ButtonElect from './components/ButtonElect';
//import ButtonBreakfast from './components/ButtonBreakfast'
//import ButtonLunchDinner from './components/ButtonLunch&Dinner';
//import Total from './components/Total';

function App () {
   return (
      <Router>
        <div>
          <ul>
           
            <li>
              <Link to="/ThemeOrder">Orden</Link>
            </li>
            
          </ul>
  
          <hr />
  
          <Route exact path="/" component={ ThemeHome } />
          <Route path="/themeorder" component={ ThemeOrder } />
          <Route path="/themekitchen" component={ ThemeKitchen } />
        </div>
      </Router>
    );
  
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
