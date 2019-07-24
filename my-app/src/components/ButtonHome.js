import React from 'react';

class ButtonHome extends React.Component {
 
render(){
return(
     
    <div className="row justify-content-end">
    <div className="col-12 col-sm-9 col-md-10 col-lg-8 col-xl-8">

    <button className='to-order-list' onClick={()=>document.body.style.backgroundColor = " #059caf"}>
    <p>Click Me!</p>
</button>
</div>
</div>
)



}

}
  
  
  export default ButtonHome;
