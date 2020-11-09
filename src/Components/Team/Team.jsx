import React from 'react';
import './Team.css';
import team from '../images/team.jpg';
function Team() {
    return (
        <section className="section">
                <div className="row">
                    <p className="team-haeding">About us</p>
                    <p className="team-top">We are experienced team</p>
                </div>
                <div className="row team-section ">
                <div className="col span-1-of-2">
                    <img src={team} alt="team-picha" className="team"/>
                </div>
                    <div className=" col span-1-of-2 description">
                        <p className="team-description">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting, 
                         remaining essentially unchanged.<br/>
                        <a href="#readmore" className="readmore">Read More</a>
                </p>
                    </div>   
                </div>
            <div className="row sub-team">
                <div className="col span-1-of-3">
                    
                    <h4><i className="fa fa-car social "></i><span className="guide">1000+ Local Guide</span></h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                 <div className="col span-1-of-3">
                    <h4><i className="fa fa-map-marker social"></i><span className="locator">Experienced Locator</span></h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                 <div className="col span-1-of-3">
                    <h4><i className="fa fa-smile-o social"></i><span className="client">96% Happy Clients</span></h4>
                    <p className="sub-team-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
            </div>
            
        </section>
    )
}

export default Team
