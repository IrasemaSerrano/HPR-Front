import React from 'react'
import { useFormik } from 'formik';
import { ReactSession } from 'react-client-session'
import getConfigFormik from '../getConfigFormik';
import FormLoginView from './FormLoginView';

const inputs = [{
    name:'email',
    label:'Email',
    initialValue:'',
    type:'email',
    typeInput:'email',
    typeError:true,
    required:true,
},{
    name:'password',
    label:'Password',
    initialValue:'',
    type:'string',
    typeInput:'password',
    typeError:true,
    required:true,
    min:8,
}
]

function validateLogin(email, password){

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
                //setToken(data.token)
            }else{
                console.log("incorrect data")
            }
        }else{
            console.log(result.message)
        }
      
    }).catch(err => console.log(err));
  }

const onSubmit = (value, {resetForm}) => {
    const {email, password} = value
    validateLogin(email, password)
    resetForm()
}

const FormLogin = ({setToken}) => {

    const myFormik = useFormik(getConfigFormik(inputs, onSubmit))

  return (
    <FormLoginView myFormik={myFormik} inputs={inputs}/>
  )
}

export default FormLogin
