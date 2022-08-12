import { makeStyles } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    div: {
        content: 'Hi',
        position: 'absolute',
        bottom: '-15px',
        right: '-20px',
        background: '#50505a',
        color: '#fff',
        width: '320px',
        padding: '16px 4px 16px 0',
        borderRadius: '6px',
        fontSize: '13px',
        boxShadow: '10px 10px 40px -14px #000'
    },
    container:{
        background:'white'
    },
    formthg: {
        width: 340,
        height: 440,
        background: '#e6e6e6',
        borderRadius: 8,
        boxShadow: '0 0 40px -10px #000',
        margin: 'calc(50vh - 220px) auto',
        padding: '20px 30px',
        maxWidth: 'calc(100vw - 40px)',
        boxSizing: 'border-box',
        fontFamily: "'Montserrat',sans-serif",
        position: 'relative'
    },

    h2: {
        textTransform: 'uppercase',
        fontFamily: "'Paytone One', sans-serif",
        margin: '10px 0',
        paddingBottom: 10,
        width: 180,
        color: '#78788c',
        borderBottom: '3px solid #78788c'
    },

    input: {
        width: '100%',
        padding: 10,
        boxSizing: 'border-box',
        background: 'none',
        outline: 'none',
        resize: 'none',
        border: 0,
        fontFamily: "'Montserrat',sans-serif",
        transition: "all .3s",
        borderBottom: '2px solid #bebed2',
        "&.Mui-focused": {
            borderBottom: '2px solid #78788c',
        }
    },

    p: {
        content: 'attr(type)',
        display: 'block',
        margin: '28px 0 0',
        fontSize: '14px',
        color: '#5a5a5a'
    },

    button2: {
        float: 'right',
        padding: '8px 12px',
        margin: '8px 0 0',
        fontfamily: "'Montserrat',sans-serif",
        border: "2px solid #78788c",
        background: 0,
        color: "#5a5a6e",
        cursor: 'pointer',
        transition: "all .3s",
        borderRadius: 4,
        '&:hover': {
            background: '#b5b8eb',
            color: 'black'
        }
    },

    icon:{
        height: 50,
        padding: 5,
        width: 50,
    }
}))



const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.container}>
                <form className={classes.formthg}>
                    <h2 className={classes.h2}>CONTACT US</h2>
                    <p className={classes.p} style={{ fontFamily: "'Rubik', sans-serif" }} type="Name:"><input className={classes.input} placeholder="Your name"></input></p>
                    <p className={classes.p} style={{ fontFamily: "'Rubik', sans-serif" }} type="Email:"><input className={classes.input} placeholder="Your Email"></input></p>
                    <p className={classes.p} style={{ fontFamily: "'Rubik', sans-serif" }} type="Message:"><input className={classes.input} placeholder="What would you like to tell us..."></input></p>
                    <div className={classes.button2}>Send Message</div>
                    <div className={classes.div}>
                        <span style={{margin:"0 5px 0 15px"}} class="fa fa-phone"></span>+91 9995963785
                        <span style={{margin:"0 5px 0 15px"}} class="fa fa-envelope-o"></span> tutelage@gmail.com
                    </div>
                </form>
                
                </div>

                
        </>
    )
}

export default Contact