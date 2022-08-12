import React from 'react';
import './Bully.css';
import BullyForm from './BullyForm';
import { Link as SLink } from 'react-scroll';

const Bully = () => {
    return (
        <>


            <section class="home-content">
                <div class="texts">
                    <h2 class="text">We at <span>Tutelage</span> </h2>
                    <h3 class="text"> stand against <span>Bullying</span></h3>
                    <p>Do Not Panic! First of all, you are not the wrong one. Don't hesitate to raise your voice against bullying. We at <span>Tutelage</span> take full care of your anonymity to general students. Your voice will reach our Tutelage team and your college's principal and HODs. Never think that you are alone in this, we all are with you.</p>
                    <div class="button">
                        <SLink to='bullypage' smooth={true}
                            duration={1000} style={{ textDecoration: "none", background: 'inherit' }}><input type="submit" value="Report Here" /></SLink>
                    </div>
                </div>
            </section>

            <BullyForm />

        </>
    )
}

export default Bully