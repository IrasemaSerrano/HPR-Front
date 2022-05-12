import React, { useState } from 'react'
import { ReactSession } from 'react-client-session';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSumbitValidateLogin = (event) => {
        event.preventDefault()
        validateLogin(email,password, props.setToken)
      }

  return (

    <form onSubmit={onSumbitValidateLogin} method="POST">
        <div>
            <input required type="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Your email" />
            <br/>
            <input required type="password" name="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Your password" />
        </div>
        <div>
            <input type="submit" value="Log In"/>
        </div>
    </form>
  )
}

function validateLogin(email, password, setToken){

    let data = {
        email,
        password
    }
  
    let fetchData = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          }
      }
  
    fetch('http://localhost:4000/api/v1/users/validatelogin', fetchData)
    .then(response => response.json())
    .then( result => {
        if (result.status === 'success') {
            let data = result.message
            if (data.login){
                ReactSession.set('token', data.token);
                ReactSession.set('user', data.user);
                setToken(data.token)
            }else{
                console.log("incorrect data")
            }
        }else{
            console.log(result.message)
        }
      
    }).catch(err => console.log(err));
  }

export default Login