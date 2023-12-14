import React from "react";
import Button from "./Button";

function PermanentResidence(){
    return (
        <section className="body-bg">
            <section className="is-hero">
                    <h2 className="is-hero-title">Your Hub for thriving as a Permanent Resident </h2>
                    <p className="is-hero-subtitle">Are you a Canadian Permanent Resident, eager to make the most of your new life in this vast and welcoming country? Look no further – our Canadian Permanent Residents' Resource Center is your go-to destination for all the information and assistance you need to thrive in Canada.</p>
                    <img src="/images/pr.png" alt="" className="mt-20"/>
                </section>

                <section className="choose-canada-section choose-canada-section-pr">
                    <section className="choose-canada-section-bg">
                        <section className="choose-canada-section-content">
                            <h2 className="choose-canada-content-title">Navigating the Challenges of <br /> Permanent Residency</h2>
                            <p className="choose-canada-content-subtitle">Becoming a Canadian Permanent Resident is a significant achievement, but it comes <br /> with its own set of challenges and uncertainties. We understand the struggles that<br /> you may encounter on your journey and are here to provide solutions and support. </p>
                            <section className="flex gap-80 m-20 choose-canada-right-section-plus-img">
                                <section className="choose-canada-right-section choose-canada-right-section-pr ml-24">
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
                                <img src="/images/pr-img2.png" alt="" className="choose-canada-img"/>
                                <div className="choose-canada-img-mobile">
                                    <img src="/images/choose-canada-mobile.png" alt=""  />
                                </div>
                            </section>
                        </section>
                        
                    </section>

                </section>
                
                <section>
                    <section className="help-section mt-48">
                        <h2 className="help-section-title">How can we help?</h2>
                        <p className="help-section-subtitle">At the Canadian Permanent Residents' Resource Center, we're dedicated to <br />addressing these pain points and ensuring your successful and fulfilling life in <br />Canada. Our services cater specifically to the needs of Permanent Residents.</p>
                    
                        <section className="help-section-content-area mt-20">
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/prsi.svg" alt=""/>
                                </div>
                                <p className="help-section-content-title">Settling In</p>
                                <p className="help-section-content-subtitle">Discover resources to assist you in finding housing, understanding the Canadian healthcare system, and integrating into your local community</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/prcd.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Career Development</p>
                                <p className="help-section-content-subtitle">Access job search tools, resume building, and networking opportunities to accelerate your career</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/prfe.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Financial Aid and Education</p>
                                <p className="help-section-content-subtitle">Explore opportunities for upgrading your skills or continuing your education to enhance your career prospects using financial aid from the government</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/prfr.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Family and Relationships</p>
                                <p className="help-section-content-subtitle">Find information on family reunification, parenting in Canada, childcare, and resources for your loved ones</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/prci.svg" alt="" />
                                </div>
                                <p className="help-section-content-title" >Cultural Integration</p>
                                <p className="help-section-content-subtitle">Learn about Canadian culture, customs, and local tips to adapt seamlessly to your new home</p>
                            </div>
                            <div className="help-section-content">
                                <div className="help-section-content-icon">
                                    <img src="/images/pr-legal.svg" alt="" />
                                </div>
                                <p className="help-section-content-title">Legal and Immigration</p>
                                <p className="help-section-content-subtitle">Stay informed about Canadian immigration laws and regulations relevant to Permanent Residents</p>
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