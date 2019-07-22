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
    // this.order = this.order.bind(this)
  }

  addOrder(name, price){

  this.setState({

  selectionArray:{name: name,price:price},



  })


   }

   componentDidUpdate(prevProps, prevState) {
    if (this.state.selectionArray !== prevState.selectionArray) {
      if (this.state.selectionArray !== "") {
        this.state.orderArray.push(this.state.selectionArray);
        this.setState({
          selectionArray: ""
                  });
      }
    }
  }
 

 
 render(){


    
    
  
  return (
     <>
     {
       this.props.newMenu.map((el, index) => 
        <button key={index} className="btn-breakfast" onClick= {(e) =>this.addOrder(el.name, el.price)}>
            <p>{el.name} </p>
            <p>${el.price}</p>
          
          </button>
       )
      }
     <TableOrder listorder = {this.state.orderArray} />
       </>
          );
  }
  
}

export default ButtonSelection;