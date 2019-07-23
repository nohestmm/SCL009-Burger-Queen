import React from 'react';


class TableOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: props.listorder
    }
    this.deleteOrder = this.deleteOrder.bind(this)
    this.addQuantity = this.addQuantity.bind(this)
    this.deleteQuantity = this.deleteQuantity.bind(this)
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
    console.log(this.state.order)
  }

  addQuantity(element) {
  element.quantity = element.quantity + 1
     
    this.setState({
      order: this.state.order
    })
    console.log(this.state.order)
  }

  deleteQuantity(element){
    if(element.quantity > 0){
    element.quantity = element.quantity - 1
    }
     
    this.setState({
      order: this.state.order
    })
    console.log(this.state.order)
    
  }

  render() {
    return (
      <table>
        <tbody>
          {
            this.state.order.map((element, index) =>
              <tr key={index}>
                <td className="firstcolumn">{element.name}</td>
                <td>{element.price}</td>
                <td >
                  <button className="thirdcolumn" onClick={() => this.addQuantity(element)}>+</button>
                  {element.quantity}
                  <button onClick={() => this.deleteQuantity(element)}>-</button></td>
                <td><button className="thirdcolumn" onClick={() => this.deleteOrder(element)}>X</button></td>
              </tr>
            )
          }
        </tbody>
      </table>
    )
  }
}
export default TableOrder;