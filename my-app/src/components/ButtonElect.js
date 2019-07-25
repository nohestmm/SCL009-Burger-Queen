import React from 'react';
import food from '../data/food.json'
import ButtonSelection from '../components/ButtonSelection'
class ButtonElection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      food,
      menu: [],
    }
    this.menuselected = this.menuselected.bind(this);
  }
  menuselected(option) {
    this.setState({
      menu: this.state.food[option]
    })
  }
  render() {
    return (
      <>
        <div className="App">
          <div className="row justify-content-end">
            <div className="col-12 col-sm-8 col-md-9 col-lg-8 col-xl-8">
              <button className="btn-election"
                onClick={() => this.menuselected("Desayuno")}>Desayuno</button>
              <button className="btn-election"
                onClick={() => this.menuselected("Almuerzo")}>Almuerzo</button>
            </div>
          </div>
        </div>
        <ButtonSelection newMenu={this.state.menu} />
      </>
    );
  }
}
export default ButtonElection;