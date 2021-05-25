import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        height: '100px'
    },
}));


function Footer(props) {

    const style = useStyles();
    return (
        <AppBar position="fixed" color="inherit" className={style.appBar}>
            <Toolbar >
                <h4 style={{ margin: '650px' }}>&copy; 2021 Zaid Al-Asfar</h4>
            </Toolbar>
        </AppBar>
    )
}




export default Footer;