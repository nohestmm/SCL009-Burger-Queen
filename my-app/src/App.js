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
console.log(menuBreakfast);
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
           {breakfast:menuBreakfast.map(el=> el.item),
              lunch:[]
              }
              )
              }
              }>Desayuno</button>
        <button className="btn-election"  onClick={()=> {this.setState({lunch:[{optionFive:"Hamburguesa simple", optionSix:"Hamburguesa doble",optionSeven:"Papas fritas",optionEight:"Onion rings",optionNine:"Agua 500ml",optionTen:"Agua 750ml",optionEleven:"Bebida 500ml",optionTwelve:"Bebida 750ml"}],breakfast:[]})}}>Cena</button>
        </div>
     </div>
        <div className="row justify-content-center">
           <div className="col-12 col-sm-8 col-md-10 col-lg-8 col-xl-10">
                 {
          this.state.breakfast.map((bfast,index) =>{
              return(
                 <ButtonBreakfast key={index} index={index} optionOne={bfast.optionOne} optionTwo={bfast.optionTwo} optionThree={bfast.optionThree} optionFour={bfast.optionFour}/>
              )

          })
       }
        
        {
          this.state.lunch.map((lunch,index) =>{
              return(
                 <ButtonLunchDinner key={index} index={index} optionFive={lunch.optionFive} optionSix={lunch.optionSix} optionSeven={lunch.optionSeven} optionEight={lunch.optionEight} optionNine={lunch.optionNine} optionTen={lunch.optionTen} optionEleven={lunch.optionEleven} optionTwelve={lunch.optionTwelve}/>
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

