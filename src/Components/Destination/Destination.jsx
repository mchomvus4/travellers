import React from 'react';
import './Destination.css';
import image2 from '../images/image2.jpeg'

function Destination() {
    return (
        <section className="destionation-section">
            <p className="destination">destination</p>
            <p className="top-destination">top destination</p>

            <div className="images">
                <div className="box">
                    <img src={image2} alt="hakuna picha"/>
                </div>
                <div className="box">
                     <img src={image2} alt="hakuna picha"/>
                </div>
                <div className="box">
                     <img src={image2} alt="hakuna picha"/>
                </div>
                <div className="box">
                   <img src={image2} alt="hakuna picha"/>
                </div>
            </div>
        </section>
    )
}

export default Destination
