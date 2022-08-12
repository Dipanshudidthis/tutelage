import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Internship from './Internship';

const useStyles = makeStyles((theme)=>({
    container : {
        paddingTop: theme.spacing(10),
    }
}));

function InternFeed() {
    const classes = useStyles();
    return (
        <>
        <Container className={classes.container}>
            <Internship/>
            <Internship/>
            <Internship/>
            <Internship/>
            <Internship/>
            <Internship/>
            <Internship/>
            <Internship/>
        </Container>
        </>
    )
}

export default InternFeed
