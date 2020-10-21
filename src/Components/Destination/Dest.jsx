import React from 'react';
import './Destination.css';
import image1 from '../images/image2.jpeg'

function Dest() {
    return (
        <section className="destionation-section">
            <p className="destination">destination</p>
            <p className="top-destination">top destination</p>

            <div className="row bg-images">
                <div className="col span-1-of-4 image">
                    <img src={image1} alt="second" className="second" />
                </div>

                <div className="col span-1-of-4 image">
                    <img src={image1} alt="second" className="second" />
                </div>
                <div className="col span-1-of-4 image">
                    <img src={image1} alt="second" className="second" />
                </div>
                <div className="col span-1-of-4 image">
                    <img src={image1} alt="second" className="second" />
                </div>
                
            </div>
        </section>
    )
}

export default Dest