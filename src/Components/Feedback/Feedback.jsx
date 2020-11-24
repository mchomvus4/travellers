import React, { Component } from 'react'
import './Feedback.css';
class Feedback extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
             <section className="section-feedback">
            <p className="contact-page">contact</p>
            <p className="cont-us">contact us</p>
                <div className="row main-contact">
                    <form className="feedback-form">
                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label for="name" className="label">Full name</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="text" name="name" id="name" placeholder="Full name" required/> 
                                </div>
                            </div>

                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label for="email">Email</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <input type="email1" name="email" id="email" placeholder="Enter your email" required/> 
                                </div>
                            </div>

                            <div className="row">
                                <div className="col span-1-of-3">
                                    <label  for="find-us">How did you find us?</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <select name="find-us" id="find-us">
                                        <option value="friends">Friends</option>
                                        <option value="search" selected>Search engine</option>
                                        <option value="adv">Advertisement</option>
                                        <option value="other">Others</option>
                                   </select>
                            </div>
                        </div>
                          <div className="row">
                                <div className="col span-1-of-3">
                                    <label for="message"> Give us Feedback</label>
                                </div>
                                <div className="col span-2-of-3">
                                    <textarea name="message" id="message" placeholder="Drop Your Feedback Here"></textarea>
                                </div>
                        </div>
                          <div className="row">
                                <div className="col span-1-of-3">
                                    <label>&nbsp;</label>
                                </div>
                                <div className="col span-2-of-3">
                                     <input type="submit" value="Submit"/>
                                </div>
                            </div>
                        </form>
                        
                </div>
            
        </section>

        )
    }
}

export default Feedback
