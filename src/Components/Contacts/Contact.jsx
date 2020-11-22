import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <section className="contact-section">
             <p className="contact">contact us</p>
            <p className="update">get updates & more</p>

            <div className="container">
                <form>
                    <div className="email-box">
                        
                        <i class="fa fa-envelope fa-3x"></i>
                        <input className="tbox" type="email" name="" placeholder="Enter your email" />
                        <button className="btnsub" type="button" name="button">Subscribe</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
