import React from 'react';
//import ButtonBreakfast from './ButtonBreakfast'

/*
function ButtonElectc(props) {
 
  return (
   
     <button className="btn-election" >{props.election}</button>
     
     

  );
}
*/
/*
class ButtonElectc extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    
  }
  handleClick() {
   
 

  }
  
  
  render() {
      return (
        <button className="btn-election" onClick={this.handleClick}>{this.props.election}</button>
      )
  }
}
*/

class ButtonElectc extends React.Component {
 
  render() {
   
     
      return (
        <div className="row justify-content-end">
                 <div className="col-12 col-sm-8 col-md-10 col-lg-8 col-xl-8">
        <button className="btn-election" >Desayuno</button>
        <button className="btn-election" >Cena</button>
     </div>
     </div>
     
      )
  }
}






export default ButtonElectc;