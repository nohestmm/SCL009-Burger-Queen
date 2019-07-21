import React from 'react';


class ButtonSelection extends React.Component {
 
  constructor(props) {
    super(props);

    this.state = {
    selectionArray: "",
    orderArray:[]
    }
    this.addOrder = this.addOrder.bind(this)
  }

  addOrder(name, price){

    this.setState({
      selectionArray:{name: name,price:price}
    })
    if(this.state.selectionArray !== ""){
    this.state.orderArray.push(this.state.selectionArray)
    console.log(this.state.orderArray)
    }
    
  }

 render(){
  return (
     <>
     {
       this.props.newMenu.map((el, index) =>
        <button key={index} className="btn-breakfast" onClick= {()=> this.addOrder(el.name, el.price)}>
            <p>{el.name} </p>
            <p>${el.price}</p>
          
          </button>
       )
         
     }
     <p>{console.log(this.state.selectionArray)}</p>
       </>
     
          );
  }
}

export default ButtonSelection;