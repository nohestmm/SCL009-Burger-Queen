import React from 'react';
import TableOrder from '../components/TableOrder'




class ButtonSelection extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
     
      selectionArray:"",
      orderArray: []
    }
    this.addOrder = this.addOrder.bind(this)
    
    
  }

  addOrder(name, price){

  this.setState({
  selectionArray:{name: name,price:price}

  })
 
  }

 

 render(){

  if(this.state.selectionArray !== ""){
    this.state.orderArray.push(this.state.selectionArray)
    this.state.selectionArray = ""
    
    
  }
 

  
  return (
     <>
   
   <div className="row justify-content-center">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
     {
       this.props.newMenu.map((el, index) => 

        <button key={index} className="btn-breakfast" onClick= {() =>this.addOrder(el.name, el.price)}>
            <p>{el.name} </p>
            <p>${el.price}</p>
          
          </button>
        
       )
         
     }
    </div>
    </div>
     <TableOrder listorder = {this.state.orderArray} />
       </>
     
          );
  }
}

export default ButtonSelection;