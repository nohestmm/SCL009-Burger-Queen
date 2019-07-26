import React from 'react';





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
    console.log(this.state.value)
  }

 
// componentDidMount(){
// let btnOrder = document.getElementById("btn-send-order");
// console.log(btnOrder)
// btnOrder.addEventListener('click',() =>{
//   console.log(this.props.order)
//   console.log(this.props.total)
//   console.log(this.state.client)

//   db.collection("ordersclient").add({
//     client: this.state.client,
//     order: this.props.order,
//     total: this.props.total
// })
// .then(docRef =>{
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch(error=> {
//     console.error("Error adding document: ", error);
// })

// })
// }

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