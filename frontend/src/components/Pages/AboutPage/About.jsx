import { makeStyles } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import robo from './FF.png';


const useStyles = makeStyles((theme) => ({
    icon: {
        height: 50,
        padding: 5,
        width: 50,
    }
}))

function About() {
    const classes = useStyles();

    return (
        <>

            <div className="bodybhiu">
                <Link to="/" style={{ color: "black" }}><Home className={classes.icon} /></Link>
                <section className='about' to='about' >
                    <div class="image" data-aos='fade-left'>
                        <img src={robo} alt='robo' />
                    </div>

                    <div class="contentghif" data-aos='fade-right'>
                        <br /><br />
                        <h2>About Us</h2>
                        <span></span>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis aspernatur voluptas inventore ab voluptates nostrum minus illo laborum harum laudantium earum ut, temporibus fugiat sequi explicabo facilis unde quos corporis!</p>
                        <ul class="links">
                            <li><a href="https://github.com/Dipanshudidthis">work</a></li>
                            <div class="vertical-line"></div>
                            <li><a href="https://www.linkedin.com/in/dipanshu-tiwari-189a59174/">service</a></li>
                            <div class="vertical-line"></div>
                            <li><Link to="/contact">contact</Link></li>
                        </ul>
                        <ul class="icons">
                            <li>
                                <a href="https://www.linkedin.com/in/dipanshu-tiwari-189a59174/" style={{ color: "black" }}><i class="fa fa-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Dipanshu_mern" style={{ color: "black" }}><i class="fa fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://github.com/Dipanshudidthis" style={{ color: "black" }}><i class="fa fa-github"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/dipanshu_16/" style={{ color: "black" }}><i class="fa fa-instagram"></i></a>
                            </li>
                        </ul>
                    </div>
                </section><br /><br />
            </div>
        </>
    );
}

export default About;
