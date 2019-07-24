import React from 'react';
import TableOrder from '../components/TableOrder'
import Total from '../components/Total'

class ButtonSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionArray: "",
      orderArray: [],
      total:0
      
    }
    this.addOrder = this.addOrder.bind(this)
  }


  addOrder(name, price) {
    

    this.setState({
     
      selectionArray: { name: name, price: price, quantity:1 }
    })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectionArray !== prevState.selectionArray) {
      if (this.state.selectionArray !== "") {
// colocar el proceso si se repite el valor y anadir una propiedad a selectionArray

if(this.state.orderArray.length){
  

}
        this.state.orderArray.push(this.state.selectionArray);
        this.setState({
          selectionArray: ""
        });
      }
    }
  }


  
  render() {
    return (
      <>
        {
          this.props.newMenu.map((el, index) =>
            <button key={index} className="btn-breakfast" onClick={() => this.addOrder(el.name, el.price, this.state.total)}>
              <p>{el.name} </p>
              <p>${el.price}</p>
            </button>
          )
        }
        <TableOrder listorder={this.state.orderArray} />
     
     
      </>
    );
  }
}
export default ButtonSelection;