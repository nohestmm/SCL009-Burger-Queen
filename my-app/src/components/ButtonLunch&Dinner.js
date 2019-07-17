import React from 'react';

const ButtonLunchDinner =(props)=> {
 
  return (
        <div>
          <button className="btn-lunch">{props.item}${props.price}</button>

          </div>
          )
    
  }



export default ButtonLunchDinner