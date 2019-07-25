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
       <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
           <div className="row ">
                 <div className="col-6 col-sm-6 col-md-7">
        {
          this.props.newMenu.map((el, index) =>
            <button key={index} className="btn-breakfast" onClick={() => this.addOrder(el)}>
              <p>{el.name} </p>
              <p>${el.price}</p>
            </button>
          )
        }
         </div>
                <div className="col-6 col-sm-6 col-md-5">
        <TableOrder listorder={this.state.orderArray}/>
        </div>
          
          </div>
   </div>
   </div>

      </>
    );
  }
}
export default ButtonSelection;