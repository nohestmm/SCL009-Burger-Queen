import React from 'react';
import TableOrder from '../components/TableOrder'


class ButtonSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      orderArray:[]
      
    }
    this.addOrder = this.addOrder.bind(this)
   
    
  }
  addOrder(name,price) {
  //asignar el elemento a found
    const found = this.state.orderArray.some(el => el.name === name)
    
//si lo encontro aumentar la cantidad de ese elemento
    if(found){
      this.state.orderArray.forEach(el =>{
        if(el.name === name){
     el.quantity++;}
  
    })
   
  }
  //si no lo encuentra ingresarlo al arreglo
if(!found){
  let selectionArray = {name: name, price: price, quantity: 1, total: price}
  this.state.orderArray.push(selectionArray)
}
  



 
  
    
    
    this.setState({
      orderArray:  this.state.orderArray
    })
  }
 render() {
    return (
      <>
        {
          this.props.newMenu.map((el, index) =>
            <button key={index} className="btn-breakfast" onClick={() => this.addOrder(el.name, el.price)}>
              <p>{el.name} </p>
              <p>${el.price}</p>
            </button>
          )
        }
        <TableOrder listorder={this.state.orderArray}/>


      </>
    );
  }
}
export default ButtonSelection;