import React from 'react';
import '../App.css';
import logo from '../img/logo.png';

function ThemeHome() {
  return (
    
     <div className='home'>
        <div className="row justify-content-end">
            <div className="col-12 col-sm-9 col-md-10 col-lg-7 col-xl-8">
                 <img src={logo}  id="logo" alt="logo"></img>
           
            </div> 
       </div>
       <div className="row justify-content-center">
            <div className="col-12 col-sm-9 col-md-10 col-lg-7 col-xl-8">
                <h1>Bienvenido a Burguer Queen</h1>
                     <p> inicia tu pedido precionando "Orden"</p>

                </div>
         </div>
 
 
 
 </div> 

   
           
 
    
  );
}

export default ThemeHome;


/*
  <Router>
         <div>
         <Link to="/ThemeOrder">
         <button className='to-order-list' onClick={()=>document.body.style.backgroundColor = " #059caf"}>
    <p>Click Me!</p>
</button>
             </Link>
  
          
  
          <Route exact path="/" component={ ThemeHome } />
          <Route path="/themeorder" component={ ThemeOrder } />
          <Route path="/themekitchen" component={ ThemeKitchen } />
       
        </div>
      </Router>
      */