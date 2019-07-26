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
    console.log(found);
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
  


console.log(this.state.orderArray)
 
  
    
    
    this.setState({
      orderArray:  this.state.orderArray
    })
  }
 render() {
    return (
      <>
      <div className="container">
       <div className="row ">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
           <div className="row justify-content-end">
                 <div className="col-6 col-sm-6 col-md-5">
        {
          this.props.newMenu.map((el, index) =>
            <button key={index} className="btn-breakfast" onClick={() => this.addOrder(el.name, el.price)}>
              <p>{el.name} </p>
              <p>${el.price}</p>
            </button>
          )
        }
         </div>
                <div className="col-6 col-sm-6 col-md-7 ">
        <TableOrder listorder={this.state.orderArray}/>
        
        </div>
          
          </div>
        </div>
      </div>
   </div>
      </>
    );
  }
}
export default ButtonSelection;