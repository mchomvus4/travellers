import React from 'react';
import './Destination.css';
import image1 from '../images/safari1.jpg';
import image2 from '../images/safari2.png';
import image3 from '../images/safari3.jpeg';
import image4 from '../images/safari4.jpg';

function Dest() {
    return (
        <section className="destionation-section">
            <p className="destination">destination</p>
            <p className="top-destination">top destination</p>

            <div className="row bg-images">
                <div className="col span-1-of-4">
                    <img src={image1} alt="Hakuna picha" className="second" />
                </div>

                <div className="col span-1-of-4">
                    <img src={image2} alt="Hakuna picha" className="second" />
                </div>
                <div className="col span-1-of-4">
                    <img src={image3} alt="Hakuna picha" className="second" />
                </div>
                <div className="col span-1-of-4">
                    <img src={image4} alt="Hakuna picha" className="second" />
                </div>
                
            </div>
        </section>
    )
}

export default Dest