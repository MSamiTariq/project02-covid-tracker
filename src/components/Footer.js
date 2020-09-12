import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    footer: {
        textAlign: 'center',
        marginTop: '20px',
        padding: '10px',
        color: '#3f51b5',
    },
    link: {
        textDecoration: 'none',
        color: '#3f51b5'
    }
}));


const Footer = () => {
    const classes = useStyles();

    return (
        <footer className={classes.footer}>
            <p style={{ textAlign: 'center' }}>
                Developed with <span role="img" aria-label="heart">💙</span> by <b><a className={classes.link} href="https://github.com/samitariq12">Muhammad Sami Tariq</a></b>
            </p>
        </footer>

    )
}

export default Footer