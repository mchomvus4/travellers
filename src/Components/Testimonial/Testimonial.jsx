import React from 'react';
import './Testimonial.css';
import image from '../images/sam.png'
const Testimonial = () => {
    return ( 
         <section className="testimonial-section">
           <p className="testimonial">testimonials</p>
           <p className="c-testimonial">client testmonials </p> 

            <div className="testimonials">
                <div className="inner">
                    <div className="row main">
                        <div className="column">
                            <div className="test">
                                <img src={image} alt="hakuna picha" />
                                <div className="name">Samwel Mchomvu</div>
                                <div className="star">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>

                         <div className="column">
                            <div className="test">
                                <img src={image} alt="hakuna picha" />
                                <div className="name">Samwel Mchomvu</div>
                                <div className="star">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>

                         <div className="column">
                            <div className="test">
                                <img src={image} alt="hakuna picha" />
                                <div className="name">Samwel Mchomvu</div>
                                <div className="star">
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                    <i class="fa fa-star"></i>
                                </div>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
     );
}
 
export default Testimonial;
