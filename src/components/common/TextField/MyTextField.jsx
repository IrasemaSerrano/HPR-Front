import styled from '@emotion/styled'
import { TextField } from '@mui/material'
import React from 'react'

const TextFieldStyle = styled(TextField)`
  padding: 5px
`

const MyTextField = ({formik, input, props={}}) => {
  return (
    <TextFieldStyle
              id={input.name}
              name={input.name}
              label={input.label}
              type={input.typeInput}
              value={formik.values[input.name]}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched[input.name] && Boolean(formik.errors[input.name])}
              helperText={formik.touched[input.name] && formik.errors[input.name]}
              {...props}
            />
  )
}

export default MyTextField
