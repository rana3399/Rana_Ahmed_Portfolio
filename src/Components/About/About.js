import React from 'react';
import Navbar from '../NavBar/Navbar';
import SocialMedia from '../SocialMedia/SocialMedia';

import profileImg from './ahmed-small-new.png';


function About() {
    return (
        <>
        <Navbar />
        <div>
            <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row flex">

                    <div className="">
                        <div className="about-avatar">
                            <img className='my-personal-img' src={profileImg} title="" alt="my-personal-img"/>
                        </div>
                    </div>

                    <div className="col-md-6 mb-5">
                        <div className="media ">
                            <label classname>E-mail</label>
                            <h5 className='text-white'>ranaAhmed.code@gmail.com</h5>
                        </div>
                        <div className="media">
                            <label>Phone</label>
                            <h5 className='text-white'>+34 6313 75245</h5>
                        </div>

                    </div>
                
                    <div className="col-lg-6 col-sm-12 fw-bold">
                        <div className="about-text go-to ">
                            <h1 className="dark-color fw-bolder">About Me</h1>
                            <h6 className="text-white lead">A Full Stack Web-Developer</h6>
                            
                            <p>
                            I am a ongoing student of Full Stake Web-Development Bootcamp at MigraCode,Barcelona.
                            </p>
                            <br />
                            <p>Currently I and my team are working on our final project - building a fully functional 
                            web-app using React, Bootstrap for front-end. And Node.js and PostgreSQL 
                            to develop the backend and database system. 
                            </p>
                            <br />
                            <p>
                            While working on different projects following Agile and 
                            Scrum methodology, I have developed strong “Team Player” attribute in the soft skills that helps 
                            me interact with the work environment and be professionally efficient.
                            </p>
                            <br />
                            <h5 className='dark-color fw-bolder'><mark>Some of the main skills and tools</mark></h5> 
                            <br />
                            <h5>✅ JavaScript, React, Bootstrap, CSS3, HTML5</h5>
                            <br />
                            <h5>✅ Node.js with Express, PostgreSQL</h5>
                            <br />
                            <h5>✅ Shopify, Wordpress, Figma</h5>
                            <br />
                            <h5>✅ RESTful API, NPM, Git</h5>
                            
                            
                            <div className="row about-list">
                                <div className="col-md-6">
                        
                                    <div className="media">
                                        <label>Residence</label>
                                        <h5>Barcelona, Spain</h5>
                                    </div>
                                    <div className="media">
                                        <label>Languages</label>
                                        <h6>English</h6>
                                        <h6>Spanish</h6>
                                        <h6>Urdu/Hindi</h6>
                                        <h6>Bangla</h6>
                                    </div>
                    
                                </div>
                                
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        </section>


        </div>
        <SocialMedia />
        </>
    )
}

export default About;
