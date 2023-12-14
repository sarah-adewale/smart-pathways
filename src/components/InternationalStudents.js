import React from "react";
import Button from "./Button";


function InternationalStudent(){

    return (
        <>
            <section className='body-bg'>
                <section className="is-hero">
                    <h2 className="is-hero-title">Welcome to Smart Pathways International Student Hub!</h2>
                    <p className="is-hero-subtitle">Are you an international student with dreams of studying in Canada, the land of diverse cultures, stunning landscapes, and world-class education? You've come to the right place! The International Students' Hub is your one-stop resource for everything you need to thrive in your Canadian adventure.</p>
                    <img src="/images/Is.png" alt="" className="mt-20"/>
                </section>

                <section className="choose-canada-section">
                    <section className="choose-canada-section-bg">
                        <section className="choose-canada-section-content">
                           
                                <h2 className="choose-canada-content-title">Why Choose Canada?</h2>
                                <p className="choose-canada-content-subtitle">Canada is renowned for its high-quality education system, multicultural <br /> environment, and exceptional opportunities for personal and professional growth.<br /> As an international student, studying in Canada can be a life-changing experience. </p>
                           
                            <section className="flex gap-80 m-20 choose-canada-right-section-plus-img">
                                <section className="choose-canada-right-section ml-24">
                                    <div>
                                        <h2 className="choose-canada-right-title">World Class Education</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8">Canadian institutions consistently rank among the world's top universities and colleges. You'll receive an education that's globally recognized and respected.</p>
                                    </div>
                                    <div>
                                        <h2 className="choose-canada-right-title">Safe and Inclusive</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8" >Canada is one of the safest countries in the world, known for its welcoming and diverse communities. You'll feel at home in no time</p>
                                    </div>
                                    <div>
                                        <h2 className="choose-canada-right-title">Global Perspective</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8">Immerse yourself in a multicultural environment, connecting with people from all corners of the world. It's a perfect place to broaden your horizons.</p>
                                    </div>
                                    <div>
                                        <h2 className="choose-canada-right-title">Natural Beauty</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8">Canada boasts breathtaking landscapes, from stunning coastlines to majestic mountains. Explore the great outdoors and experience nature like never before</p>
                                    </div>
                                    <div>
                                        <h2 className="choose-canada-right-title">Career Opportunities</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8">Canadian institutions foster innovation and provide numerous opportunities for internships and co-op programs, setting you on the path to a successful career.</p>
                                    </div>
                                </section>
                                <img src="/images/choose-canada-img.png" alt="" className="choose-canada-img" />
                                <div className="choose-canada-img-mobile">
                                    <img src="/images/choose-canada-mobile2.png" alt=""  />
                                </div>
                            </section>
                        </section>
                        
                    </section>

                </section>
                
                <section>
                    <section className="help-section mt-48">
                        <h2 className="help-section-title">How can we help?</h2>
                        <p className="help-section-subtitle">At Smartpathways, we're dedicated to ensuring your Canadian journey is <br />smooth, successful, and unforgettable. Our well-tailored services cater to the <br />needs of international students:</p>
                    
                        <section className="help-section-content-area mt-20">
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/visa-icon.svg" alt=""/>
                                </div>
                                <p className="help-section-content-title">Study Consultation</p>
                                <div className="help-sub-text-area">
                                    <p className="help-section-content-subtitle">Get expert advice on choosing the right Canadian university or college and the perfect program to match your goals</p>
                                </div>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon5.svg" alt="" />
                                </div>
                                
                                <p className="help-section-content-title">Visa Application Assistance</p>
                                <div className="help-sub-text-area">
                                    <p className="help-section-content-subtitle">Navigate the immigration process with confidence. We will connect you to a licenced immigration consultant to go through your visa applications and ensure compliance with Canadian regulations</p>
                                </div>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon2.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Scholarship Opportunities</p>
                                <div className="help-sub-text-area">
                                    <p className="help-section-content-subtitle">Discover financial aid options, including scholarships and grants, to make your education in Canada affordable</p>
                                </div>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon4.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Academic Support</p>
                                <div className="help-sub-text-area">
                                    <p className="help-section-content-subtitle">Access resources to help you excel in your studies, from research assistance to study tips</p>
                                </div>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon1.svg" alt="" />
                                </div>
                                <p className="help-section-content-title" >Cultural Integration</p>
                                <div className="help-sub-text-area">
                                    <p className="help-section-content-subtitle">Learn about Canadian culture, customs, and local tips to adapt seamlessly to your new home</p>
                                </div>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon3.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Essential Resources</p>
                                <div className="help-sub-text-area">
                                    <p className="help-section-content-subtitle">Access practical information on housing, healthcare, and more to make your transition to Canada stress-free</p>
                                </div>
                            </div>
                            
                            {/* <img src="/svgs/carlender.svg" alt="" /> */}
                        </section>
                        <div className="is-btn">
                            <Button style={{color: '#DDD4D5', width: '214px'}}>Start Application</Button>
                        </div>

                        

                    </section>
                </section>
            </section>
        </>
        
    );
}

export default InternationalStudent;