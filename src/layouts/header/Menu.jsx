import { Tabs, Tab } from '@mui/material'
import React from 'react'
import {Hotel, RoomService, PhotoLibrary, Info} from '@mui/icons-material';

import ImgLogo from '../../images/Logo225.png'
import { Link, useLocation } from 'react-router-dom';


function Menu() {

  const {pathname}=useLocation()
  const [value, setValue] = React.useState(pathname);

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <div style={{display:"flex", justifyContent:"center", position:'sticky', top: 0, background: 'linear-gradient(to bottom, #f0a418, white)'}}>

    <Tabs value={value} 
          onChange={handleChange} 
          aria-label="icon label tabs example" 
          variant="scrollable" 
          scrollButtons="auto">

      <Tab  icon={<Hotel />} 
            label="ROOMS"
            value="/rooms"
            to="/rooms"
            component={Link}/>

      <Tab  icon={<RoomService />}
            label="RECERVE"
            value="/recerve"
            to="/recerve"
            component={Link}/>

      <Tab  icon={<img src={ImgLogo} alt={'Logo'} style={{height:'58px'}}/>}
            value="/"
            to="/"
            component={Link}/>

      <Tab  icon={<PhotoLibrary />}
            label="GALERY"
            value="/galery"
            to="/galery"
            component={Link}/>

      <Tab  icon={<Info />}
            label="ABOUT"
            value="/about"
            to="/about"
            component={Link}/>

    </Tabs>
    </div>
  )
}

export default Menu
