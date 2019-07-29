import React from 'react';
import { db } from '../data/firebaseInit'




class Total extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      client: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    
    this.setState({client: event.target.value});
    
  }

 
componentDidMount(){
let btnOrder = document.getElementById("btn-send-order");


btnOrder.addEventListener('click',() =>{
  console.log(this.props.order)
  console.log(this.props.total)
  console.log(this.state.client)

  if(this.state.client === ''){

    alert("debe incluir el nombre del cliente")
  }

  else{

  db.collection("ordersclient").add({
    client: this.state.client,
    order: this.props.order,
    total: this.props.total
})
.then(docRef =>{
    console.log("Document written with ID: ", docRef.id);
})
.catch(error=> {
    console.error("Error adding document: ", error);
})

  }

})
}

  render() {


    return (
<>

<div>
     
       
        <span className="total">{`Total          ${this.props.total}`}$</span>
        
       
      </div>
       <div>
       <button className="btn-total" id="btn-send-order">Enviar a cocina</button> 
             <input className="input" value={this.state.client} type="text" onChange={this.handleChange} placeholder="Nombre cliente"></input>
          
       </div>
       </>
    )

  }

}

export default Total;