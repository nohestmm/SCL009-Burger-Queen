import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
//import ButtonElect from './components/ButtonElect';
import ButtonBreakfast from './components/ButtonBreakfast'
import ButtonLunchDinner from './components/ButtonLunch&Dinner';
import Total from './components/Total';
import food from './food.json';

// const menuBreakfast = food.filter(el=> el.type === "Desayuno");
// const lunchs = food.filter(el => el.type==="Almuerzo");
// console.log(menuBreakfast);
// console.log(lunchs);
class App extends React.Component {
 
   constructor(props) {
      super(props);
      this.state ={
          food,
          menu:[]
      }
this.showselectedDesayuno = this.showselectedDesayuno.bind(this);
this.showselectedAlmuerzo = this.showselectedAlmuerzo.bind(this);     
      
    }

showselectedDesayuno(){
   this.setState({

      menu: this.state.food.Desayuno
   })
}

showselectedAlmuerzo(){
   this.setState({

      menu: this.state.food.Almuerzo
   })
}


render(){

 return (
    <div className="App">
     
              <Nav/> 

     <div className="row justify-content-end">
        <div className="col-12 col-sm-8 col-md-10 col-lg-8 col-xl-8">
        <button className="btn-election"  
        onClick={this.showselectedDesayuno}>Desayuno</button>




        <button className="btn-election"  
        onClick={ this.showselectedAlmuerzo}>Cena</button>
        </div>
     </div>


        <div className="row justify-content-center">
           <div className="col-12 col-sm-8 col-md-10 col-lg-8 col-xl-10">
                 {
          this.state.menu.map((bfast,index) =>{
              return(
                 <ButtonBreakfast 
                 key={index} 
                 name={bfast.name} 
                 price = {bfast.price}
                 
                />
              )

          })
       }
        
        {
          this.state.menu.map((lunch,index) =>{
              return(
                 <ButtonLunchDinner 
                 key={index} 
                 name={lunch.name} 
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

