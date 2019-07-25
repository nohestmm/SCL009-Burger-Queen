import React from 'react';

class Total extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
    console.log(this.state.value)
  }
  render() {


    return (
<>

<div>
     
       
        <span className="total">{`Total          ${this.props.total}`}$</span>
        
       
      </div>
       <div>
       <button className="btn-total">Enviar a cocina</button>  <input className="input" value={this.state.value} type="text" onChange={this.handleChange} placeholder="Nombre cliente"></input>
       </div>
       </>
    )

  }

}

export default Total;