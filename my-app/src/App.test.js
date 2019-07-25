import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonElection from './components/ButtonElect';

configure({adapter:new Adapter()})

it('renders without crashing', ()=>{

const clickButton = shallow(<ButtonElection/>);
expect(clickButton).toMatchSnapshot()

            
clickButton.find('button').simulate('click');
expect(clickButton).toMatchSnapshot()


})

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
