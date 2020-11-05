import React from 'react';
import './Team.css';
import team from '../images/team.jpg';
function Team() {
    return (
        <section className="section">
            <div>
                <div className="row">
                    <p className="team-haeding">About us</p>
                    <p className="team-top">We are experienced team</p>
                </div>
                <div className="row team-section ">
                <div className="col span-1-of-2">
                    <img src={team} alt="team-picha" className="team"/>
                </div>
                <div className="col span-1-of-2 bg-content-color">
                        <p className="lorem-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                         when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                         It has survived not only five centuries,
                         but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            {/* <a className="btn-btn-readmore" href="#readmore">Read more</a> */}
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
