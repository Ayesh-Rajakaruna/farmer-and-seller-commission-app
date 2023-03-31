import { Alert, Snackbar } from '@mui/material';
import React from 'react'

const Notification = (props) => {

    const {notify, setnotify} = props;

    const haddleClose = () => {setnotify({isOpen:false, message:'', type:''})}
    const type = notify.type || 'info'; // add default value for type
    return (
        <Snackbar open = {notify.isOpen} autoHideDuration = {3000} anchorOrigin={{vertical:'top',horizontal:'right'}} onClose={haddleClose}>
            <Alert severity={type}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notification