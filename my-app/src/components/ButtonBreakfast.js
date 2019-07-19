import React from 'react';


/*
function ButtonElectc(props) {
 
  return (
   
     <button className="btn-election" >{props.election}</button>
     
     

  );
}
*/
const ButtonBreakfast =({name, price})=> {
 
  return (
        <div>
          <button className="btn-breakfast">{name} ${price}</button>
         
          </div>
          )
    
  }



export default ButtonBreakfast