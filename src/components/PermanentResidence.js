import React from "react";
import Button from "./Button";

function PermanentResidence(){
    return (
        <section>
            <section className="is-hero">
                    <h2 className="is-hero-title">Your Hub for thriving as a  <br></br> Permanent Resident </h2>
                    <p className="is-hero-subtitle">Are you a Canadian Permanent Resident, eager to make the most of your <br></br> new life in this vast and welcoming country? Look no further – our Canadian <br></br> Permanent Residents' Resource Center is your go-to destination for all the <br></br> information and assistance you need to thrive in Canada.</p>
                    <img src="/images/pr.png" alt="" className="mt-20"/>
                </section>

                <section className="choose-canada-section">
                    <section className="choose-canada-section-bg">
                        <section className="choose-canada-section-content">
                            <h2 className="choose-canada-content-title">Navigating the Challenges of <br /> Permanent Residency</h2>
                            <p className="choose-canada-content-subtitle">Becoming a Canadian Permanent Resident is a significant achievement, but it comes <br /> with its own set of challenges and uncertainties. We understand the struggles that<br /> you may encounter on your journey and are here to provide solutions and support. </p>
                            <section className="flex gap-80 m-20">
                                <section className="choose-canada-right-section ml-24">
                                    <div>
                                        <h2 className="choose-canada-right-title">Settlement Stress</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8">The process of finding suitable housing, understanding the healthcare system, and adapting to a new community can be overwhelming</p>
                                    </div>
                                    <div>
                                        <h2 className="choose-canada-right-title">Employment Challenges</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8" >Navigating the Canadian job market and securing employment that matches your skills and experience can be daunting</p>
                                    </div>
                                    <div>
                                        <h2 className="choose-canada-right-title">Cultural Adaptation</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8">Adapting to a new culture, language, and way of life can lead to feelings of isolation and homesickness.</p>
                                    </div>
                                    <div>
                                        <h2 className="choose-canada-right-title">Legal and Immigration Complexities</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8">Staying informed about the ever-changing immigration laws and regulations relevant to Permanent Residents can be confusing.</p>
                                    </div>
                                    <div>
                                        <h2 className="choose-canada-right-title">Career Advancement</h2>
                                        <p className="choose-canada-right-subtitle ml-8 mt-8">Many Permanent Residents face barriers to career advancement and may need support in upgrading their skills.</p>
                                    </div>
                                </section>
                                <img src="/images/pr-img2.png" alt="" />
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
                                <p className="help-section-content-subtitle">Get expert advice on choosing the right Canadian university or college and the perfect program to match your goals</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon5.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Visa Application Assistance</p>
                                <p className="help-section-content-subtitle">Navigate the immigration process with confidence. We will connect you to a licenced immigration consultant to go through your visa applications and ensure compliance with Canadian regulations</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon2.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Scholarship Opportunities</p>
                                <p className="help-section-content-subtitle">Discover financial aid options, including scholarships and grants, to make your education in Canada affordable</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon4.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Academic Support</p>
                                <p className="help-section-content-subtitle">Access resources to help you excel in your studies, from research assistance to study tips</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon1.svg" alt="" />
                                </div>
                                <p className="help-section-content-title" >Cultural Integration</p>
                                <p className="help-section-content-subtitle">Learn about Canadian culture, customs, and local tips to adapt seamlessly to your new home</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/help-icon3.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Essential Resources</p>
                                <p className="help-section-content-subtitle">Access practical information on housing, healthcare, and more to make your transition to Canada stress-free</p>
                            </div>
                            
                            {/* <img src="/svgs/carlender.svg" alt="" /> */}
                        </section>
                        <div className="is-btn">
                            <Button style={{color: '#DDD4D5', width: '214px'}}>Start Application</Button>
                        </div>

                        

                    </section>
                </section>
        </section>
    )
}

export default PermanentResidence;