import React from 'react';


class TableOrder extends React.Component {

     
  constructor(props) {
    super(props);

    this.state = {
        props
   
    }

    // this.deleteOrder = this.deleteOrder.bind(this)
}
    render(){
        
        return (
              
         <table>
                <tbody>
               
                    {
                    this.props.listorder.map((el,index)=>
                    <tr key={index}>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td><button onClick = {()=> this.deleteOrder()}>X</button></td>
                    </tr>
           )
        }
              
                </tbody>
             </table>


        )
    }

}

export default TableOrder;