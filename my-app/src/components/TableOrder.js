import React from 'react';


class TableOrder extends React.Component {

     
  constructor(props) {
    super(props);

    this.state = {
    order:props.listorder
 
    }

    this.deleteOrder = this.deleteOrder.bind(this)
}

deleteOrder(e){

   this.state.order.forEach((el, index) =>{
        if(this.state.order[index] === e){
           delete this.state.order[index]

        }
   

})

this.setState({
    order:this.state.order
  })
  console.log(this.state.order)

}
    render(){
     
        
        return (
              
         <table>
                <tbody>
               
                    {
                    this.state.order.map((el,index)=>
                   <tr key={index}>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td><button onClick = {()=>this.deleteOrder(el)}>X</button></td>
                    </tr>
           )
        }
              
                </tbody>
             </table>


        )
       
    }

}

export default TableOrder;