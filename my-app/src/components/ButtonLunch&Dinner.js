import React from 'react';

const ButtonLunchDinner =({name,price})=> {
 
  return (
        <div>
          <button className="btn-lunch" >{name} ${price}</button>

          </div>
          )
    
  }



export default ButtonLunchDinner