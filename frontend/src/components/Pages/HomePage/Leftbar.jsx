import React from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import { Bookmark, ExitToApp, Home } from '@material-ui/icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InfoIcon from '@material-ui/icons/Info';
import PhoneIcon from '@material-ui/icons/Phone';
import { motion } from "framer-motion";
import PanToolIcon from '@material-ui/icons/PanTool';
import { Link } from 'react-router-dom';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { useLogout } from '../../../hooks/useLogout'

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        position: 'sticky',
        top: 0,
        paddingTop: theme.spacing(10),
        [theme.breakpoints.up("sm")]: {
            backgroundColor: 'white',
            color: '#555',
            border: '1px solid #ece7e7'
        }
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        margin: "20px 20px 50px 0",
        // marginBottom: theme.spacing(5),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: 'pointer'
        }
    },
    icon: {
        fontWeight: 500,
        marginRight: theme.spacing(1),
        [theme.breakpoints.up('sm')]: {
            fontSize: '18px'
        }
    },
    text: {
        color: "black",
        fontFamily: "'Space Mono', monospace",
        [theme.breakpoints.down("sm")]: {
            display: 'none'
        }
    }
}));

const buttonVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.3
        }
    }
}

function Leftbar() {


    const { logout } = useLogout();

    const classes = useStyles();

    const handleClick = () => {
        logout();
    }

    return (
        <>
            <Container className={classes.container} style={{ background: "#D5D6EA" }}>
                <motion.div className={classes.item}
                    variants={buttonVariants} whileHover="hover"
                >
                    <Link to="/" style={{ color: "black" }}><Home className={classes.icon} /></Link>
                    <Link to="/" style={{ textDecoration: "none" }}><Typography className={classes.text}>Home</Typography></Link>
                </motion.div>
                <motion.div className={classes.item}
                    variants={buttonVariants} whileHover="hover"
                >
                    <Link to="/profile" style={{ color: "black" }}><AccountCircleIcon className={classes.icon} /></Link>
                    <Link to="/profile" style={{ textDecoration: "none" }}><Typography className={classes.text}>Profile</Typography></Link>
                </motion.div>
                {/* <motion.div className={classes.item}
                    variants={buttonVariants} whileHover="hover"
                >
                    <Bookmark className={classes.icon} />
                    <Typography className={classes.text}>Posts</Typography>
                </motion.div> */}


                <motion.div className={classes.item}
                    variants={buttonVariants} whileHover="hover"
                >
                    <Link to="/internship" style={{ color: "black" }}><BeenhereIcon className={classes.icon} /></Link>
                    <Link to="/internship" style={{ textDecoration: "none" }}><Typography className={classes.text}>Internships</Typography></Link>
                </motion.div>

                <motion.div className={classes.item}
                    variants={buttonVariants} whileHover="hover"
                >
                    <Link to="/bully" style={{ color: "black" }}><PanToolIcon className={classes.icon} /></Link>
                    <Link to="/bully" style={{ textDecoration: "none" }}><Typography className={classes.text}>Report Bullying</Typography></Link>
                </motion.div>
                <motion.div className={classes.item}
                    variants={buttonVariants} whileHover="hover"
                >
                    <Link to="/about" style={{ color: "black" }}><InfoIcon className={classes.icon} /></Link>
                    <Link to="/about" style={{ textDecoration: "none" }}><Typography className={classes.text}>About Us</Typography></Link>
                </motion.div>
                {/* <motion.div className={classes.item}
                    variants={buttonVariants} whileHover="hover"
                >
                    <Link to="/contact" style={{ color: "black" }}><PhoneIcon className={classes.icon} /></Link>
                    <Link to="/contact" style={{ textDecoration: "none" }}><Typography className={classes.text}>Contact Us</Typography></Link>
                </motion.div> */}
                <motion.div className={classes.item}
                    variants={buttonVariants} whileHover="hover"
                >
                    <button onClick={handleClick} style={{ color: "black", background: "#D5D6EA", border: 0 }}><ExitToApp className={classes.icon} /></button>
                    <button onClick={handleClick} style={{ textDecoration: "none", background: "#D5D6EA", border: 0 }}><Typography className={classes.text}>Logout</Typography></button>
                </motion.div>

            </Container>
        </>
    );
}

export default Leftbar;
