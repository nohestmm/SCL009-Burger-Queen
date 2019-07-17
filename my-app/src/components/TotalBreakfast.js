import React from 'react';

const TotalBreakfast =(props)=> {
 
  return (
        <div className="total">
             
             
              {
          this.state.breakfast.map((bfast,index) =>{
            if (bfast.optionOne){
                 return(
                   <div>
                      <span>bfast.optionOne</span>
                   </div>
                 )

            }  
           

          })
       }
          </div>
          )
    
  }



export default TotalBreakfast