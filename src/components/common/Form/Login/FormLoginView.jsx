import React from 'react'
import MyTextField from '../../TextField/MyTextField'
import Submit from '../../Button/Submit'
import ImgLogin from '../../../../images/Login.png'
import styled from '@emotion/styled'

const FormStyled = styled.form`
  width: 20em
`;


const FormLoginView = ({myFormik, inputs}) => {
  return (
    <FormStyled onSubmit={myFormik.handleSubmit} >
        <img src={ImgLogin} alt={'Login'} style={{height:'250px'}}/>
        <MyTextField formik={myFormik} input={inputs[0]} props={{fullWidth:true}}/>
        <MyTextField formik={myFormik} input={inputs[1]} props={{fullWidth:true}}/>
        <Submit formik={myFormik} text={'Sign In'}/>
        <Submit formik={myFormik} text={'Sign Up'}/>
    </FormStyled>
  )
}

export default FormLoginView
