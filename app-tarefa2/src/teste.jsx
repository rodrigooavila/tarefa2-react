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

const [loginState, setLoginState] = useState({
	logon: msg_logout,
	filtroLogin: false,
});

const [loginState, setLoginState] = useState({
	avatar: loginState.avatar,
	message: loginState.message,
});

function generateLoginArray(filtroLogin){
	if(filtroLogin == true){
		return msg_login;
	}else{
		return msg_logout;
	}
}


const fazerLogin = (newAvatar, newMessage) =>{
	let _filtro;
	if (loginState.filtroLogin === true){
		_filtro = false;
	}else{
		_filtro = true;
	}
	let finalArray = generateLoginArray(_filtro);
	finalArray.concat({ avatar: newAvtar, message: newMessage});


 setLoginState({
	logon: finalArray,
	filtroLogin: _filtro,
});
 setLoginState({
	avatar: loginState.avatar,
	message: loginState.message,
});
}

let filterButtonLabel;
if (loginState.filtro === true){
	filterButtonLabel = 'Logout'
}
else{
	filterButtonLabel = 'Login'

}	
    return (
	<div className = "Login" >
		<div className = "card">
			<h1>{loginState.message}</h1>
			<img src={loginState.avatar} />
			
		</div>
		<button type="button" onClick={() => fazerLogin(props.newAvatar, props.newMessage)}> {filterButtonLabel}</button>
	</div>
        
    );

}

export default ControleLogin;