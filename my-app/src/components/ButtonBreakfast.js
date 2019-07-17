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
          <button className="btn-breakfast">{props.optionOne}</button>
          <button className="btn-breakfast">{props.optionTwo}</button>
          <button className="btn-breakfast">{props.optionThree}</button>
          <button className="btn-breakfast">{props.optionFour}</button>
          </div>
          )
    
  }



export default ButtonBreakfast