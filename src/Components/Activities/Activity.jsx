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

            <div className="act">
                <div className="inner">
                    <div className="row activity-row">
                        <div className="column-activity">
                            <div className="activities">
                            <img src={image1} alt="hakuna picha" />
                            <div className="location">
                                <i class="fa fa-map-marker map"></i>
                                 <p className="l-name">New York, NY, USA</p>
                            </div>
                            <p className="para1"><b>There are many variations of<br/> passages of Lorem</b></p>
                            <p className="para2">Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.<br/>Lorem Ipsum standard</p>
                            </div>
                            <div className="border"></div>
                            <div className="price">
                            <p className="cost">$250.00</p>
                            <button>Book Now</button>
                        </div>
                        </div>

                        <div className="column-activity">
                            <div className="activities">
                            <img src={image2} alt="hakuna picha" />
                            <div className="location">
                                <i class="fa fa-map-marker map"></i>
                                 <p className="l-name">Paris, FRANCE</p>
                            </div>
                            <p className="para1"><b>There are many variations of<br/> passages of Lorem</b></p>
                            <p className="para2">Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.<br/>Lorem Ipsum standard</p>
                            </div>
                             <div className="price">
                            <p className="cost">$250.00</p>
                            <button>Book Now</button>
                        </div>
                        </div>
                        

                        <div className="column-activity">
                            <div className="activities">
                            <img src={image3} alt="hakuna picha" />
                            <div className="location">
                                <i class="fa fa-map-marker map"></i>
                                 <p className="l-name">London,England</p>
                            </div>
                            <p className="para1"><b>There are many variations of<br/> passages of Lorem</b></p>
                            <p className="para2">Lorem Ipsum is simply dummy text of <br/>the printing and typesetting industry.<br/>Lorem Ipsum standard</p>
                            </div>
                             <div className="price">
                            <p className="cost">$250.00</p>
                            <button>Book Now</button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Activity