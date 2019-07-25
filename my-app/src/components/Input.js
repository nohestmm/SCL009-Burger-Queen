import React from 'react';
import food from '../data/food.json'
import ButtonSelection from '../components/ButtonSelection'
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
    }
   
  }
 
  render() {
    return (
     <input type="text" placeholder="nombre"></input>
    );
  }
}
export default Input;