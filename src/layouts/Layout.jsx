import './Layout.css'
import React from 'react'
import Stack from '@mui/material/Stack';
import Header from './header/Header';
import ClientRoutes from '../routes/ClientRoutes';

function Layout({children}) {
  return (
    <>
      <Stack style={{background: '#ffffff'}}>
        <Header/>
        <ClientRoutes/>
        <div>
          {children}
        </div>
      </Stack>
    </>
  )
}

export default Layout