import React from 'react';

class Total extends React.Component {
  constructor(props) {
    super(props);

    this.state={
 
    }
  }
  render() {


    return (
<div className="total">
     
       
        <span>{`Total          ${this.props.total}`}$</span>
        <button className="">Enviar a cocina</button>
      
      
     </div>
    )

  }

}

export default Total;