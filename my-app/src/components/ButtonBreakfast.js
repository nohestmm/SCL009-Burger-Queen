import React from 'react';


/*
function ButtonElectc(props) {
 
  return (
   
     <button className="btn-election" >{props.election}</button>
     
     

  );
}
*/
const ButtonBreakfast =({name,price})=> {
 
  return (
        
          <button className="btn-breakfast" onClick={this.showTotal}>{name}$ {price}</button>
         
         
          )
    
  }



export default ButtonBreakfast