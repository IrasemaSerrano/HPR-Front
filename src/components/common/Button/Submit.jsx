import { Button } from '@mui/material'
import React from 'react'

const Submit = ({formik, text, props={}}) => {
  return (
  <Button color="primary" 
            sx={{bgcolor:'#103160'}}
            variant="contained"
            type="submit"
            disabled={!(formik.isValid&&formik.dirty)}
            {...props}
            >
        {text}
    </Button>
  )
}

export default Submit
