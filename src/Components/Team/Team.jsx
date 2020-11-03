import React from 'react';
import './Team.css';
import team from '../images/team.jpg';
function Team() {
    return (
        <section>
            <div className="team-section">
                <div className="row">
                    <p className="team-haeding">About us</p>
                    <p className="team-top">We are experienced team</p>
                </div>
                <div className="row">
                <div className="col span-1-of-2">
                    <img src={team} alt="team-picha" className="team"/>
                </div>
                <div className="col span-1-of-2">
                     <p className="lorem-content">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam accumsan quis orci in sagittis. Ut dolor mauris, tempus quis vestibulum non, feugiat non ipsum. Mauris euismod vulputate neque sit amet lobortis. Vivamus scelerisque at tellus dictum consectetur. Etiam suscipit vehicula tortor et aliquet.</p>
                        <a className="btn-btn-readmore" href ="#readmore">ReadMore</a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Team
