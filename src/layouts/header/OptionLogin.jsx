import React from 'react'
import MenuUser from './MenuUser'
import MyModal from '../../components/common/Dialogs/MyDialog';
import {Login as LoginIcon} from '@mui/icons-material'
import FormLogin from '../../components/common/Form/Login/FormLogin';

function OptionLogin({setToken}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MenuUser title={'Sign In'} onClick={handleOpen} label={'Menu user'} IconFab={<LoginIcon/>}>
        <MyModal open={open} handleClose={handleClose}>
            <FormLogin setToken={setToken}/>
        </MyModal>
    </MenuUser>
  )
}

export default OptionLogin