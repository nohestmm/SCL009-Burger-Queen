import React from 'react';


/*
function ButtonElectc(props) {
 
  return (
   
     <button className="btn-election" >{props.election}</button>
     
     

  );
}
*/
const ButtonBreakfast =(props)=> {
 
  return (
        <div>
          <button className="btn-breakfast">{props.item}$ {props.price}</button>
         
          </div>
          )
    
  }



export default ButtonBreakfast