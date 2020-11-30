import React, {Component} from 'react';
import logo from './logo.svg';
import Contador from './Contador';
import ControleLogin from './ControleLogin';
import './App.css';

class App extends Component {


  render(){

	return (
    		<div className="App">
     			<p><Contador/></p>
			<p><ControleLogin/></p>
			
   		</div>
  		);
	}
}



export default App;
