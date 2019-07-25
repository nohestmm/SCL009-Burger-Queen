import React from 'react';
import Total from '../components/Total'



class TableOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.listorder,
      suma: 0,
     
    }
    this.deleteOrder = this.deleteOrder.bind(this)
    this.addQuantity = this.addQuantity.bind(this)
    this.deleteQuantity = this.deleteQuantity.bind(this)
    this.sumar = this.sumar.bind(this)
    this.newprice = this.newprice.bind(this)
  }

  sumar(suma) {
    
    let arraySuma = this.state.order.map(el => el.total)
    if (arraySuma.length) {
      suma = arraySuma.reduce((a, b) => a + b)
    }
    return suma
  }


  deleteOrder(element) {
    this.state.order.forEach((el, index) => {
      if (this.state.order[index] === element) {
        delete this.state.order[index]
        this.state.order.splice(index, 1)
      }
    })
    this.setState({
      order: this.state.order
    })
    
  }
  addQuantity(element) {
 
    element.quantity = element.quantity + 1
   
   
    this.setState({
      order: this.state.order

    })
   
  }

  deleteQuantity(element) {
    if (element.quantity > 0) {
      element.quantity = element.quantity - 1

    }

    this.setState({
      order: this.state.order
    })
    console.log(this.state.order)

  }

newprice(element){
   
element.total = element.price * element.quantity

return element.total



 }

  render() {
    return (
      <>
        <table>
          <tbody>
            {
              this.state.order.map((element, index) =>
                <tr key={index}>
                  <td className="firstcolumn">{element.name}</td>
                  <td>{ this.newprice(element)}</td>
                  <td >
                    <button className="btn-plus" onClick={() => this.addQuantity(element)}>+</button>
                    {element.quantity}
                    <button className="btn-minus" onClick={() => this.deleteQuantity(element)}>-</button></td>
                  <td><button className="btn-delete" onClick={() => this.deleteOrder(element)}>X</button></td>

                </tr>
              )
            }
          </tbody>
        </table>
        <Total total={this.sumar(this.state.suma)} />
      </>
    )
  }
}
export default TableOrder;