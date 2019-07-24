import React from 'react';
import TableOrder from '../components/TableOrder'

class ButtonSelection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectionArray: "",
      orderArray: []
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
 

 render(){

 return (
     <>
   
   <div className="row">
      <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
           <div className="row ">
                 <div className="col-6 col-sm-6 col-md-7">
                {
                 this.props.newMenu.map((el, index) => 

               <button key={index} className="btn-breakfast" onClick= {() =>this.addOrder(el.name, el.price)}>
                  <p>{el.name} </p>
                  <p>${el.price}</p>
          
                   </button>
        
                     )
         
                  }
                </div>
                <div className="col-6 col-sm-6 col-md-5">
                <TableOrder listorder = {this.state.orderArray} />

                </div>
          
           </div>
    </div>
    </div>
     
       </>
     
          );
  }
}

export default ButtonSelection;