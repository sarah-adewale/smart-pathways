import React from "react";
import FooterSubscribeForm from "./FooterSubscribeForm";
import CustomLink from "./CustomLink";
import SocialIcons from "./SocialIcons";

const Footer = () => {
    return (
        <>
            <footer>
                <div>
                    <FooterSubscribeForm />
                </div>
                <section className="block mt-56">
                    <div className="flex gap-20 link-section">
                        <div className="block footer-links">
                            <p className="business-links-title">Company</p>
                            {/* <div className="block gap-20 "> */}
                                <CustomLink className="company-links-text">About us</CustomLink>
                                <CustomLink className="company-links-text">International Students</CustomLink>
                                <CustomLink className="company-links-text">Permanent Residence</CustomLink>
                            {/* </div> */}
                        </div>
                        <div className="block footer-links">
                            <p className="business-links-title">QuickLinks</p>
                            <CustomLink className="company-links-text">Book an appointment</CustomLink>
                            <CustomLink className="company-links-text">Start Application</CustomLink>
                            <CustomLink className="company-links-text">Immigration Assessment Form</CustomLink>
                            <CustomLink className="company-links-text">Get Brochure</CustomLink>
                        </div>
                        <div className="footer-logo">
                            <CustomLink to="/" ><img src="/images/logo.png" alt="site-logo" /> </CustomLink>
                        </div>
                    </div>
                    <div className="flex cta-section">
                        <div className="block">
                        <div className="flex gap-2.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.0073 10.0059C1.80728 10.0059 1.62651 10.1251 1.54772 10.3089L0.0499507 13.8037C-0.0162559 13.9582 -0.000419199 14.1356 0.0921026 14.2759C0.184625 14.4162 0.341452 14.5006 0.509523 14.5006H13.4902C13.6583 14.5006 13.8151 14.4162 13.9076 14.2759C14.0002 14.1356 14.016 13.9582 13.9498 13.8037L12.452 10.3089C12.3732 10.1251 12.1925 10.0059 11.9924 10.0059H11.0711H2.92863H2.0073Z" fill="#572D31"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99994 0.499023C4.37841 0.499023 2.19385 2.68359 2.19385 5.30512C2.19385 6.16071 2.48791 7.0045 2.89896 7.769C3.31161 8.53647 3.85779 9.25306 4.4004 9.86313C4.94407 10.4744 5.49341 10.9891 5.9214 11.3527C6.13518 11.5343 6.32231 11.6812 6.46657 11.7853C6.53782 11.8367 6.60456 11.882 6.66218 11.9165C6.69023 11.9334 6.72439 11.9527 6.76073 11.9695C6.77882 11.9779 6.80484 11.9891 6.83589 11.999C6.86031 12.0068 6.92135 12.025 6.99994 12.025C7.07921 12.025 7.14073 12.0064 7.16523 11.9986C7.19644 11.9885 7.22256 11.9772 7.24069 11.9687C7.27709 11.9517 7.31129 11.9322 7.33932 11.9152C7.39692 11.8804 7.46364 11.8347 7.53484 11.783C7.67902 11.6781 7.86605 11.5301 8.07972 11.3474C8.50751 10.9816 9.05659 10.4642 9.6 9.85133C10.1423 9.23965 10.6882 8.52242 11.1007 7.75674C11.5114 6.99434 11.806 6.154 11.806 5.30512C11.806 2.68359 9.62146 0.499023 6.99994 0.499023Z" fill="#BCABAC"/>
                                    <path d="M6.99981 6.74085C7.79254 6.74085 8.43517 6.09822 8.43517 5.30549C8.43517 4.51276 7.79254 3.87012 6.99981 3.87012C6.20708 3.87012 5.56445 4.51276 5.56445 5.30549C5.56445 6.09822 6.20708 6.74085 6.99981 6.74085Z" fill="#572D31"/>
                                </svg>
                                <p className="company-address">West 33rd Street, Hamilton, l9C 5J7 ON, Canada</p>
                        </div>
                        <div className="flex gap-5 mt-10">
                                <CustomLink className="company-links-text">Privacy Policy</CustomLink>
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="7" viewBox="0 0 6 7" fill="none" className="mt-2.5">
                                    <circle cx="3" cy="3.5" r="3" fill="#E4DBDB"/>
                                </svg>
                                <CustomLink className="company-links-text">Terms Of Service</CustomLink>
                        </div>
                        </div>
                        <div className="profile-info">
                            <SocialIcons />
                            <div className="flex gap-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none" className="mt-1.5">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 0.25C0.671573 0.25 0 0.92157 0 1.75V10.25C0 11.0784 0.671573 11.75 1.5 11.75H12.5C13.3284 11.75 14 11.0784 14 10.25V1.75C14 0.92157 13.3284 0.25 12.5 0.25H1.5Z" fill="#BCABAC"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.0918L7.38341 6.50364C7.29008 6.56365 7.15463 6.60648 7 6.60648C6.84537 6.60648 6.70992 6.56365 6.61659 6.50364L0 2.0918V3.5942L5.92657 7.54599L5.93237 7.54976C6.24703 7.75458 6.62486 7.85648 7 7.85648C7.37514 7.85648 7.753 7.75461 8.06765 7.5498L14 3.59419V2.0918Z" fill="#572D31"/>
                                </svg>
                                <CustomLink className="company-email-address">info@smartpathways.ca</CustomLink>
                                
                            </div>
                            <p className="copyright-text">© Copyright 2023. SmartPathways Inc</p>
                            
                        </div>
                        
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer