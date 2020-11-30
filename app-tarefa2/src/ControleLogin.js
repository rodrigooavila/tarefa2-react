import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const ControleLogin = props => {

	let msg_login = [
{ avatar: "login.jpg",
  message: "Seja bem vindo.",},
]

let msg_logout = [
{ avatar: "logout.jpg",
  message: "Por favor faça o login.",},
]

const [loginsState, setLoginsState] = useState({
	logon: msg_logout,
	filtroLogin: false,
});

const [loginState, setLoginState] = useState({
	avatar: loginsState.avatar,
	message: loginsState.message,
});

function generateLoginArray(filtroLogin){
	if(filtroLogin === true){
		return msg_login;
	}else{
		return msg_logout;
	}
}


const fazerLogin = (newAvatar, newMessage) =>{
	let _filtro;
	if (loginsState.filtroLogin === true){
		_filtro = false;
	}else{
		_filtro = true;
	}

console.log(_filtro)

	let finalArray = generateLoginArray(_filtro);
	finalArray.concat({ avatar: newAvatar, message: newMessage});


setLoginsState({
	logon: finalArray,
	filtroLogin: _filtro,
});
 setLoginState({
	avatar: loginsState.avatar,
	message: loginsState.message,
});
}

let filterButtonLabel;
if (loginsState.filtro === true){
	filterButtonLabel = 'Logout'
}
else{
	filterButtonLabel = 'Login'

}	
    return (
	<div className = "Login" >
		<div className = "card">
			<h1>{loginsState.message}</h1>
			<img src={loginsState.avatar} alt="img"/>
			
		</div>
		<button type="button" onClick={() => fazerLogin(props.newAvatar, props.newMessage)}> {filterButtonLabel}</button>
	</div>
        
    );

}


export default ControleLogin;