import React from 'react'
import ImgLogo from '../../images/Logo225.png'
import video from '../../images/recepcion.mp4'
import {Grid, Zoom} from '@mui/material'

const style = {
    video: {
        width:'100%'
    },
    imgLogo:{
        width:'40%',
        position: 'absolute',
        top: '0', left:'0',
    }
}

function Header() {
  return (
    <Grid container>
        <Grid item xs={12}>
            <div>
                <video style={style.video} loop autoPlay muted>
                    <source src={video} type="video/mp4" />
                </video>
                <Zoom in style={{ transitionDelay: '2400ms'}}><img className='imgLogo' src={ImgLogo} style={style.imgLogo} alt={'Logo'} /></Zoom>
            </div>
        </Grid>
    </Grid>
  )
}

export default Header
