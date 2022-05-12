import { Fab, Tooltip } from '@mui/material'
import React from 'react'

function MenuUser({title, label, onClick, IconFab, children}) {


  return (
    <div style={{ position: 'fixed', top: '10px', right: '25px',}}>
        <Tooltip title={title} arrow>      
            <Fab onClick={onClick} aria-label={label}> 
                {IconFab}
            </Fab>
        </Tooltip>
        {children}
    </div>
  )
}

export default MenuUser
