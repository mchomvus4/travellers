import React from 'react'
import './Activity.css';
import image1 from '../images/activity01.jpg';
import image2 from '../images/activity02.jpg';
import image3 from '../images/activity03.jpg';
function Activity() {
    return (
         <section className="activities-section">
            <p className="activity">activities</p>
            <p className="t-activities">trending activties</p>  
            <div className="row nafasi">
                <div className="col span-1-of-3 card-main">
                    <div className="card">
                        <div className="image">
                            <img src={image1} alt="hakuna picha"/>
                        </div>
                        <div className="title">
                               <h3 className="location"><i className="fa fa-map-marker map"></i>New York, NY, USA</h3>
                        </div>
                        <div className="des">
                            <p className="para1"><b>There are many variations <br/>of passages of Lorem</b></p>
                            <p className="para2">Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry<br/> Lorem Ipsum standard</p>
                           <span className="price">$250.00</span> <button className="btn">Book Now</button>
                        </div>
                   </div>
                </div>
               
               <div className="col span-1-of-3 card-main">
                    <div className="card">
                        <div className="image">
                            <img src={image2} alt="hakuna picha"/>
                        </div>
                        <div className="title">
                               <h3 className="location"><i className="fa fa-map-marker map"></i>Paris, FRANCE</h3>
                        </div>
                        <div className="des">
                            <p className="para1"><b>There are many variations <br/>of passages of Lorem</b></p>
                            <p className="para2">Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry<br/> Lorem Ipsum standard</p>
                           <span className="price">$250.00</span> <button className="btn">Book Now</button>
                        </div>
                   </div>
                </div>

                <div className="col span-1-of-3 card-main">
                    <div className="card">
                        <div className="image">
                            <img src={image3} alt="hakuna picha"/>
                        </div>
                        <div className="title">
                               <h3 className="location"><i className="fa fa-map-marker map"></i>London, England</h3>
                        </div>
                        <div className="des">
                            <p className="para1"><b>There are many variations <br/>of passages of Lorem</b></p>
                            <p className="para2">Lorem Ipsum is simply dummy text of<br/> the printing and typesetting industry<br/> Lorem Ipsum standard</p>
                           <span className="price">$250.00</span> <button className="btn">Book Now</button>
                        </div>
                   </div>
                </div>
            </div>
        </section>
    )
}

export default Activity