import React from 'react';
import TableOrder from '../components/TableOrder'


class ButtonSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      orderArray:[]
      
    }
    this.addOrder = this.addOrder.bind(this)
    // this.addquantity = this.addquantity.bind(this)
    
  }




  addOrder(el) {

  let selectionArray = {name: el.name, price: el.price, quantity: 1, total: el.price}

  this.state.orderArray.push(selectionArray)
console.log(this.state.orderArray)
 
  
    
    
    this.setState({
      orderArray:  this.state.orderArray
    })
  }
 render() {
    return (
      <>
        {
          this.props.newMenu.map((el, index) =>
            <button key={index} className="btn-breakfast" onClick={() => this.addOrder(el)}>
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