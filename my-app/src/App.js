import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
//import ButtonElect from './components/ButtonElect';
import ButtonBreakfast from './components/ButtonBreakfast'
import ButtonLunchDinner from './components/ButtonLunch&Dinner';
import Total from './components/Total';
import food from './food.json';

const menuBreakfast = food.filter(el=> el.type === "Desayuno");
const lunchs = food.filter(el => el.type==="Almuerzo");
console.log(menuBreakfast);
//console.log(lunch);
class App extends React.Component {
 
   constructor() {
      super();
      this.state ={
         
          breakfast:[],
          lunch:[] 
      }
      
    }

render(){

 return (
    <div className="App">
     
              <Nav/>  
     <div className="row justify-content-end">
        <div className="col-12 col-sm-8 col-md-10 col-lg-8 col-xl-8">
        <button className="btn-election"  
        onClick={()=> {this.setState(
           {breakfast:menuBreakfast.map(el=>el), lunch:[]
              }
              )
              }
              }>Desayuno</button>
        <button className="btn-election"  onClick={
           ()=> {this.setState(
              {lunch: lunchs.map (el =>el),breakfast:[]})}}>Cena</button>
        </div>
     </div>
        <div className="row justify-content-center">
           <div className="col-12 col-sm-8 col-md-10 col-lg-8 col-xl-10">
                 {
          this.state.breakfast.map((bfast,index) =>{
              return(
                 <ButtonBreakfast 
                 key={index} 
                 item={bfast.item} 
                 price = {bfast.price}
                 
                />
              )

          })
       }
        
        {
          this.state.lunch.map((lunch,index) =>{
              return(
                 <ButtonLunchDinner 
                 key={index} 
                 item={lunch.item} 
                 price = {lunch.price}
                 />
              )

          })
       }
              

            </div>
        </div>
             <div className="row justify-content-center">
                   <div className="col-12 col-sm-8 col-md-10 col-lg-8 col-xl-10">
                        <Total />
                   </div>
             </div>
    
     </div>

  );
}}


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

