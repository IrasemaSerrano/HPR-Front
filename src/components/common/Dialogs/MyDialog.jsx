import { Dialog, DialogContent } from '@mui/material'
import React from 'react'

function MyDialog({open, handleClose, label, description, children}) {
  return (
    <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby={label||''}
        aria-describedby={description||''}>
        <DialogContent dividers={true}>
        {children}
        </DialogContent>
    </Dialog>
  )
}

export default MyDialog
