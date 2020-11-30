import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const Contador = props => {

    const [contadorState, setContadorState] = useState({
        caracter: 0,

    });


    const iniciaContador = ({target:{value}}) => {
         console.log(value.length);
	 
	setContadorState({
			caracter: (value.length),

        })
}

	
    return (

        <div className = "Contador" >
        	<input type = "text" size = "40" onChange = { iniciaContador }/>

        

        	<p>Este texto contém { contadorState.caracter} caracteres.</p>
	</div>
    );

}
export default Contador;