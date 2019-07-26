import React from 'react';
import { BrowserRouter as Router, Route,NavLink }  from "react-router-dom";
import ThemeHome from './components/ThemeHome'
import ThemeKitchen from './components/ThemeKitchen'
import ThemeOrder from './components/ThemeOrder'
import './App.css';
//import ButtonHome from '.components/ButtonHome'


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
        <div className='navbar'>
      <NavLink to="/">
						Inicio
					</NavLink>
					<NavLink exact to="/ThemeOrder" >
						Orden
					</NavLink>
					<NavLink exact to="/themekitchen">
						Cocina
					</NavLink>

      </div>
      <Route exact path="/" component={ ThemeHome } />
          <Route path="/themeorder" component={ ThemeOrder } />
          <Route path="/themekitchen" component={ ThemeKitchen } />
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
