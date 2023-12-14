import React from 'react';
import Button from './Button';
import Accordion from "./Accordion.js";
import Card from './Card.js';
import CommentSlider from './CommentSlider.js';
import CustomLink from './CustomLink.js';


function Home(){


    return (
        <>
        <section className='body-bg' >
           
                <section className='hero-section'>
                    <div className='flex gap-80 mobile-hero-title-section'>
                        <div className='block gap-10 mt-36 hero-text-btn'>
                            <div className='hero-text-container'>
                                
                                    <h1 className='hero-text'>Welcome to your gateway to success in </h1>
                                    <div className='hompage-svg'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="295" height="65" viewBox="0 0 295 65" fill="none">
                                            <path d="M37.6784 27.0606C38.5114 27.1123 39.3077 27.2448 40.0359 27.4527C42.0038 28.0135 43.0865 29.3022 42.3219 30.626C41.4624 32.11 38.6966 32.8472 36.3 33.5092C30.6949 35.0616 25.5036 37.1762 20.9873 39.7466C20.1164 40.2297 19.367 40.7823 18.7675 41.3836C15.1575 45.1148 20.4695 47.6933 25.423 49.0312C37.2358 52.2126 50.8118 53.1654 64.3224 53.5135C100.395 54.4428 137.237 51.3099 173.797 47.9779C202.167 45.3933 231.429 43.3268 258.816 36.4105C267.94 34.1066 286.309 29.5385 281.324 22.0104C280.277 20.5064 278.56 19.2301 276.333 18.3002C271.458 16.1803 264.699 14.9317 258.7 13.8745C239.408 10.4781 218.68 9.41036 197.968 9.05553C169.467 8.60243 140.645 9.61642 111.828 12.086C84.48 14.4015 52.5054 16.8965 26.9128 24.6982C25.7104 23.3871 28.1183 21.6975 30.3218 20.6652C44.9524 13.8721 63.2183 10.6592 80.4382 8.24179C142.225 -0.431816 214.18 -3.58749 271.529 7.5467C280.827 9.35019 290.551 12.1223 293.524 17.5975C297.444 24.8496 287.568 33.258 276.296 38.4293C259.174 46.2828 238.261 50.1083 217.848 53.0298C187.671 57.345 157.209 60.103 126.805 62.037C100.018 63.7389 73.1472 64.8116 46.8217 63.8049C35.3465 63.3691 23.6449 62.4431 13.6642 59.5106C9.45009 58.2663 3.80585 56.4825 2.02379 53.8195C-0.0979827 50.7662 -0.197922 47.2345 1.74164 43.8506C2.77252 42.0019 4.30425 40.2292 6.27409 38.6051C12.0442 33.8639 20.7449 30.5705 29.6747 28.217C32.2565 27.5232 35.0555 26.903 37.6784 27.0606Z" fill="#CDFC91"/>
                                            <text x="50%" y="50%" text-anchor="middle" fill="#191919" stroke-width="1px" dy=".3em" className="canada-text">Canada!</text>
                                        </svg>

                                        
                                    </div>
                                    <div className='hompage-svg-mobile'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="189" height="59" viewBox="0 0 189 59" fill="none">
                                            <g clip-path="url(#clip0_879_50125)">
                                                <path d="M25.9923 27.2222C26.5155 27.2547 27.0156 27.3379 27.473 27.4685C28.7089 27.8207 29.389 28.6301 28.9087 29.4615C28.3689 30.3935 26.6318 30.8565 25.1266 31.2723C21.6062 32.2473 18.3457 33.5755 15.5092 35.1898C14.9622 35.4932 14.4916 35.8403 14.115 36.218C11.8477 38.5614 15.184 40.1808 18.2951 41.0211C25.7143 43.0193 34.2409 43.6177 42.7264 43.8363C65.3824 44.42 88.5215 42.4523 111.484 40.3596C129.302 38.7363 147.68 37.4384 164.881 33.0945C170.611 31.6475 182.148 28.7785 179.017 24.0503C178.36 23.1058 177.282 22.3042 175.883 21.7201C172.821 20.3887 168.576 19.6045 164.808 18.9405C152.692 16.8073 139.673 16.1367 126.665 15.9138C108.764 15.6293 90.662 16.2661 72.5633 17.8172C55.3867 19.2714 35.3046 20.8385 19.2308 25.7384C18.4756 24.915 19.9879 23.8538 21.3719 23.2055C30.5608 18.939 42.033 16.9211 52.8482 15.4028C91.6542 9.95518 136.847 7.97322 172.866 14.9662C178.705 16.0989 184.812 17.84 186.68 21.2787C189.142 25.8336 182.939 31.1146 175.859 34.3625C165.106 39.295 151.971 41.6976 139.15 43.5325C120.197 46.2428 101.065 47.9749 81.9698 49.1896C65.1456 50.2585 48.269 50.9322 31.7349 50.3C24.5277 50.0263 17.1783 49.4447 10.9099 47.6029C8.2631 46.8214 4.71816 45.7011 3.59891 44.0285C2.2663 42.1109 2.20353 39.8927 3.4217 37.7674C4.06916 36.6063 5.03119 35.4929 6.26837 34.4729C9.89234 31.4951 15.357 29.4267 20.9655 27.9485C22.587 27.5127 24.3449 27.1232 25.9923 27.2222Z" fill="#CDFC91"/>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_879_50125">
                                                <rect width="185.539" height="37.8579" fill="white" transform="matrix(0.994207 -0.107482 -0.107482 -0.994207 4.40186 58.4492)"/>
                                                </clipPath>
                                            </defs>
                                            <text x="50%" y="50%" text-anchor="middle" fill="#191919" stroke-width="1px" dy=".3em" className="canada-text">Canada!</text>
                                        </svg>
                                    </div>
                             
                                     
                                <p className='hero-subtitle'>We provide guidance and support for scholarships and financial aid programs.</p>
                                {/* mobile */}
                                <p className='mobile-hero-subtitle' style={{fontSize: "1.6rem", width: '360px', textAlign: "center", justifyContent: 'center', alignContent: 'center'}}>We provide guidance and support for scholarships and financial aid programs.</p>
                            </div>
                            
                            <div className="appointment-button">
                                <div className=' mobile-appointment-btn'>
                                    <CustomLink to="https://calendly.com/smartpathways/30min" target='_blank'>
                                        <Button className="flex" style={{color: '#DDD4D5', width: '244px'}}>Book an appointment
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className='booking-icon'>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 0C4.05228 0 4.5 0.447715 4.5 1V2H9.50009V1C9.50009 0.447715 9.94781 0 10.5001 0C11.0524 0 11.5001 0.447715 11.5001 1V2H12.5C13.3284 2 14 2.67157 14 3.5V4.5H0V3.5C0 2.67157 0.671573 2 1.5 2H2.5V1C2.5 0.447715 2.94772 0 3.5 0Z" fill="#79575A"/>
                                                <path d="M0 4.5H14V12.5C14 13.3284 13.3284 14 12.5 14H1.5C0.671573 14 0 13.3284 0 12.5V4.5Z" fill="#BCABAC"/>
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 6.75C7.75 6.33579 7.41421 6 7 6C6.58579 6 6.25 6.33579 6.25 6.75V8.5H4.5C4.08579 8.5 3.75 8.83579 3.75 9.25C3.75 9.66421 4.08579 10 4.5 10H6.25V11.75C6.25 12.1642 6.58579 12.5 7 12.5C7.41421 12.5 7.75 12.1642 7.75 11.75V10H9.5C9.91421 10 10.25 9.66421 10.25 9.25C10.25 8.83579 9.91421 8.5 9.5 8.5H7.75V6.75Z" fill="#79575A"/>
                                            </svg>
                                            
                                        </Button>
                                    </CustomLink>
                                </div>
                            </div>
                        </div>
                        <div className='mt-20 hero-image-container' >
                            <img src="/images/hero-image.png" alt="" className='hero-image' />
                        </div>
                    </div>

                </section>
              
         
            <section className='service-hero-section' >
                <div className='service-hero-background' >
                    <div className='block mobile-service-section' >
                        <h2 className='services-title' >Our Services</h2>
                        <p className='services-subtitle' >Our comprehensive suite of services is designed to empower you with the knowledge, skills, and support you need to succeed on your educational and professional journey.</p>
                    </div>
                    <div className='mt-28 accordion-mobile' >
                        <Accordion />
                    </div>
                </div>
            </section>

            <section className='blog-section' >
                <section className='blog-section-background flex gap-48'>
                    
                        <img src="/images/blog-img.png" alt="" className='blog-image'/>
                        <img src="/images/blog-image-mobile.png" alt="" className='blog-image-mobile'/>
                        <section className='blog-info' >
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="209" height="74" viewBox="0 0 209 74" fill="none" className="about-hero-circle">
                                    <g clip-path="url(#clip0_873_49257)">
                                        <path d="M27.9601 56.1486C28.5421 55.9755 29.0921 55.7088 29.5885 55.3588C30.9301 54.4148 31.5937 52.6989 30.9552 51.1841C30.2378 49.4862 28.2363 48.9514 26.5002 48.4596C22.4396 47.3044 18.6273 45.4084 15.2552 42.867C14.6059 42.3923 14.0367 41.8167 13.5693 41.1619C10.7464 37.0841 14.2867 33.236 17.6692 30.9494C25.7362 25.5076 35.2129 22.5533 44.6896 20.3457C69.9918 14.4516 96.1442 13.4141 122.114 12.6567C142.265 12.068 163.005 10.7291 182.794 15.5572C189.387 17.1653 202.655 20.317 199.721 30.1633C199.099 32.137 197.988 33.9214 196.492 35.3503C193.225 38.581 188.565 40.9968 184.426 43.0788C171.115 49.7698 156.616 53.8081 142.075 56.9742C122.062 61.288 101.712 63.8535 81.2548 64.6416C61.8423 65.4241 39.1621 66.5979 20.5674 60.4525C19.8214 62.2114 21.6435 63.956 23.272 64.9252C34.0794 71.286 47.1717 72.7972 59.4677 73.4757C103.587 75.9094 154.439 70.2665 193.931 49.1093C200.334 45.6812 206.963 41.0147 208.638 33.9396C210.844 24.5707 203.257 15.611 194.936 10.7866C182.295 3.46014 167.295 1.55046 152.714 0.678182C131.16 -0.606901 109.523 0.046408 87.9911 1.69763C69.0198 3.15502 50.0377 5.39136 31.5973 10.0938C23.5589 12.1398 15.3986 14.8141 8.60137 19.7103C5.73183 21.7851 1.89739 24.7071 0.846421 28.1926C-0.413828 32.1992 -0.215569 36.523 1.406 40.3973C2.2717 42.5178 3.48389 44.4794 4.99294 46.2017C9.41205 51.2272 15.7824 54.0989 22.2425 55.7932C24.1113 56.2993 26.1272 56.687 27.9601 56.1486Z" fill="#CDFC91"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_873_49257">
                                        <rect width="209" height="74" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    <text x="50%" y="50%" text-anchor="middle" fill="#79575A" stroke-width="1px" dy=".3em" className="svg-text2">From Our Blog</text>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="209" height="74" viewBox="0 0 209 74" fill="none" className="about-hero-circle-mobile">
                                    <g clip-path="url(#clip0_873_49257)">
                                        <path d="M27.9601 56.1486C28.5421 55.9755 29.0921 55.7088 29.5885 55.3588C30.9301 54.4148 31.5937 52.6989 30.9552 51.1841C30.2378 49.4862 28.2363 48.9514 26.5002 48.4596C22.4396 47.3044 18.6273 45.4084 15.2552 42.867C14.6059 42.3923 14.0367 41.8167 13.5693 41.1619C10.7464 37.0841 14.2867 33.236 17.6692 30.9494C25.7362 25.5076 35.2129 22.5533 44.6896 20.3457C69.9918 14.4516 96.1442 13.4141 122.114 12.6567C142.265 12.068 163.005 10.7291 182.794 15.5572C189.387 17.1653 202.655 20.317 199.721 30.1633C199.099 32.137 197.988 33.9214 196.492 35.3503C193.225 38.581 188.565 40.9968 184.426 43.0788C171.115 49.7698 156.616 53.8081 142.075 56.9742C122.062 61.288 101.712 63.8535 81.2548 64.6416C61.8423 65.4241 39.1621 66.5979 20.5674 60.4525C19.8214 62.2114 21.6435 63.956 23.272 64.9252C34.0794 71.286 47.1717 72.7972 59.4677 73.4757C103.587 75.9094 154.439 70.2665 193.931 49.1093C200.334 45.6812 206.963 41.0147 208.638 33.9396C210.844 24.5707 203.257 15.611 194.936 10.7866C182.295 3.46014 167.295 1.55046 152.714 0.678182C131.16 -0.606901 109.523 0.046408 87.9911 1.69763C69.0198 3.15502 50.0377 5.39136 31.5973 10.0938C23.5589 12.1398 15.3986 14.8141 8.60137 19.7103C5.73183 21.7851 1.89739 24.7071 0.846421 28.1926C-0.413828 32.1992 -0.215569 36.523 1.406 40.3973C2.2717 42.5178 3.48389 44.4794 4.99294 46.2017C9.41205 51.2272 15.7824 54.0989 22.2425 55.7932C24.1113 56.2993 26.1272 56.687 27.9601 56.1486Z" fill="#CDFC91"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_873_49257">
                                        <rect width="209" height="74" fill="white"/>
                                        </clipPath>
                                    </defs>
                                    <text x="50%" y="50%" text-anchor="middle" fill="#79575A" stroke-width="1px" dy=".3em" className="svg-text2">From Our Blog</text>
                                </svg>
                            </div>
                           
                               
                                <h2 className='blog-title' >Canada Universities reduces cost by 10% for all students for summer 2024</h2>
                               
                                <div className='flex gap-5 blog-btn-section'>
                                    <Button style={{width:'136px', backgroundColor:'#BDFC6D', color: '#360308', border: '1px solid #BDFC6D'}}>Visit blog</Button>
                                    <Button style={{width:'156px'}}>Read article</Button>
                                </div>
                         
                        </section>
                    
                </section> 
            </section>
            <section className='why-choose-us-section' >
                <section className='why-choose-us-section-bg' >
                    <div className='why-choose-us-text' >
                        <h2 className='why-choose-us-title' >Why choose us</h2>
                        {/* mobile */}
                        <h2 className='mobile-why-choose-us-title' >Why choose us</h2>
                        <div className='subtitle-section-mobile' >
                            <p className='why-choose-us-subtitle' >Our comprehensive suite of services is designed to empower you with the knowledge, skills, and support you need to succeed on your educational and professional journey.</p>
                        </div>
                    </div>
                
                    <section className='mt-44 ml-44 card-container-section'>
                        <div className='flex card-container gap-5' >
                            <Card
                                title="Expertise"
                                subtitle="Our seasoned professionals have extensive experience in international education, immigration, and career development."
                                image="/images/choose-us-banner.png" // Replace with the actual image URL
                                className="custom-card mb-20 higher-card" // Apply custom styles for this card
                            />

                            <Card
                                title="Personalised Approach"
                                subtitle="We understand that every journey is unique, which is why we tailor our services to your specific needs."
                                image="/images/choose-us-banner1.png" // Replace with the actual image URL
                                className="custom-card" // Apply custom styles for this card
                            />
                            <Card
                                title="Success Stories"
                                subtitle="Our track record speaks for itself – countless students and PRs have achieved their goals with our assistance. (Read Client’s Review)"
                                image="/images/choose-us-banner2.png" // Replace with the actual image URL
                                className="custom-card mb-20 higher-card" // Apply custom styles for this card
                            />
                            <Card
                                title="Comprehensive Support"
                                subtitle="From the first consultation to settling into your Canadian life, we're here to guide you at every stage."
                                image="/images/choose-us-banner3.png" // Replace with the actual image URL
                                className="custom-card" // Apply custom styles for this card
                            />

                           
                        </div>
                        
                    </section>
                    <section className='mt-44 ml-44 mobile-card-container' >
                        <div className='flex card-container gap-5 mt-20'>
                            <Card
                                title="Expertise"
                                subtitle="Our seasoned professionals have extensive experience in international education, immigration, and career development."
                                image="/images/choose-us-banner.png" // Replace with the actual image URL
                                className="custom-card mb-20" // Apply custom styles for this card
                            />

                            <Card
                                title="Personalised Approach"
                                subtitle="We understand that every journey is unique, which is why we tailor our services to your specific needs."
                                image="/images/choose-us-banner1.png" // Replace with the actual image URL
                                className="custom-card" // Apply custom styles for this card
                            />
                            <Card
                                title="Success Stories"
                                subtitle="Our track record speaks for itself – countless students and PRs have achieved their goals with our assistance. (Read Client’s Review)"
                                image="/images/choose-us-banner2.png" // Replace with the actual image URL
                                className="custom-card mb-20 higher-card" // Apply custom styles for this card
                            />
                            <Card
                                title="Comprehensive Support"
                                subtitle="From the first consultation to settling into your Canadian life, we're here to guide you at every stage."
                                image="/images/choose-us-banner3.png" // Replace with the actual image URL
                                className="custom-card" // Apply custom styles for this card
                            />

                           
                        </div>
                        
                    </section>
                </section>
            </section>

            <section className='achievements-section'>
                <section className='achievements'>
                    <div className='flex mb-72 achievements-mobile'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 35 35" fill="none" className='star1'>
                            <path d="M35 17.4991C32.7018 17.4983 30.4259 17.9505 28.3024 18.8297C26.1789 19.7088 24.2494 20.9978 22.624 22.623C20.9986 24.2482 19.7093 26.1777 18.8296 28.3014C17.95 30.4251 17.4972 32.7013 17.4972 35C17.4972 30.3585 15.6538 25.907 12.3724 22.625C9.09104 19.3429 4.64055 17.4991 0 17.4991C4.64023 17.4991 9.09044 15.6555 12.3717 12.3738C15.6531 9.09217 17.4967 4.64121 17.4972 0C17.4972 2.29864 17.95 4.57475 18.8297 6.69832C19.7094 8.82188 20.9987 10.7513 22.6241 12.3763C24.2495 14.0014 26.179 15.2902 28.3025 16.1692C30.426 17.0481 32.7019 17.5 35 17.4991Z" fill="#9A8183"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className=''>
                            <path d="M18 8.99953C16.8181 8.99915 15.6476 9.23168 14.5555 9.68382C13.4634 10.136 12.4711 10.7989 11.6352 11.6347C10.7993 12.4705 10.1362 13.4628 9.68382 14.555C9.23142 15.6472 8.99857 16.8178 8.99857 18C8.99857 15.6129 8.05051 13.3236 6.36295 11.6357C4.67539 9.94779 2.38657 8.99953 0 8.99953C2.3864 8.99953 4.67508 8.05139 6.36261 6.36368C8.05014 4.67597 8.99832 2.38691 8.99857 0C8.99857 1.18216 9.23143 2.35273 9.68384 3.44485C10.1362 4.53697 10.7993 5.52924 11.6353 6.36497C12.4712 7.2007 13.4635 7.86353 14.5556 8.31557C15.6477 8.76761 16.8181 9.00003 18 8.99953Z" fill="#DDD4D5"/>
                        </svg>
                    </div>
                    <div className='flex achievements-body'>
                        <h2 className='achievements-title mt-16'>You’re in great company</h2>
                        <div className='block'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none" className='achievements-icon'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3741 0.194764C14.1354 0.0913287 13.8645 0.0913287 13.6258 0.194764L1.39049 5.496C1.04627 5.64514 0.823486 5.98446 0.823486 6.35961C0.823486 6.73474 1.04627 7.07406 1.39049 7.22321L3.07068 7.95119V18.4755C2.25309 18.8383 1.68283 19.6571 1.68283 20.6092C1.68283 21.8976 2.72735 22.9422 4.01584 22.9422C5.30433 22.9422 6.34885 21.8976 6.34885 20.6092C6.34885 19.6561 5.7775 18.8366 4.95866 18.4744V8.76921L13.6258 12.5244C13.8645 12.6279 14.1354 12.6279 14.3741 12.5244L26.6095 7.22321C26.9536 7.07406 27.1764 6.73474 27.1764 6.35961C27.1764 5.98446 26.9536 5.64514 26.6095 5.496L14.3741 0.194764ZM6.38714 16.4302L6.37771 11.9487L12.6895 14.6834C13.525 15.0455 14.4732 15.0455 15.3087 14.6834L21.6216 11.9482L21.6225 16.428C21.6225 16.6337 21.5552 16.8338 21.4307 16.9976L20.6814 16.4282C21.4307 16.9976 21.4311 16.9972 21.4307 16.9976L21.4294 16.9993L21.4279 17.0013L21.4243 17.006L21.4147 17.0183L21.3859 17.054C21.3626 17.0826 21.3308 17.1205 21.2901 17.1664C21.209 17.2582 21.0928 17.3822 20.9406 17.5274C20.636 17.8175 20.1848 18.1939 19.5768 18.567C18.3547 19.3169 16.5157 20.0428 13.9994 20.0428C11.4831 20.0428 9.64641 19.3169 8.42657 18.5664C7.81968 18.1932 7.36976 17.8165 7.0661 17.5261C6.9142 17.3808 6.79847 17.2567 6.71762 17.1648C6.67717 17.1189 6.64538 17.0809 6.62207 17.0523L6.59346 17.0165L6.58388 17.0041L6.58025 16.9994L6.57874 16.9974C6.57842 16.997 6.57741 16.9957 7.32824 16.4283L6.57741 16.9957C6.45436 16.8328 6.38757 16.6343 6.38714 16.4302Z" fill="#240205"/>
                                </svg>
                            </div>
                            <p className='achievements-number'>200+</p>
                            <p className='achievements-subtitle'>Students Applied</p>
                        </div>
                        <div className='block'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className='achievements-icon achievements-icon-1'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9946 0.839844C8.66705 0.839844 4.34822 5.15867 4.34822 10.4862C4.34822 15.8138 8.66705 20.1326 13.9946 20.1326C19.3221 20.1326 23.6409 15.8138 23.6409 10.4862C23.6409 5.15867 19.3221 0.839844 13.9946 0.839844ZM14.376 5.40219L15.6611 7.98739C15.6899 8.05279 15.7354 8.10937 15.7932 8.15138C15.851 8.19338 15.9188 8.2193 15.9899 8.22649L18.8441 8.65984C18.9257 8.67048 19.0026 8.7041 19.0658 8.75682C19.1289 8.80953 19.1758 8.87914 19.2009 8.9575C19.226 9.03588 19.2282 9.11978 19.2074 9.19938C19.1865 9.27899 19.1434 9.35101 19.0832 9.40703L16.9762 11.4094C16.9447 11.4694 16.9283 11.536 16.9283 11.6037C16.9283 11.6714 16.9447 11.738 16.9762 11.798L17.3796 14.6372C17.3968 14.7193 17.3899 14.8046 17.3596 14.8828C17.3293 14.9609 17.277 15.0287 17.2089 15.0777C17.1409 15.1267 17.0601 15.155 16.9764 15.159C16.8926 15.1631 16.8095 15.1427 16.7371 15.1004L14.1967 13.7555C14.1309 13.7258 14.0596 13.7105 13.9875 13.7105C13.9153 13.7105 13.844 13.7258 13.7783 13.7555L11.2379 15.1004C11.1655 15.1427 11.0824 15.1631 10.9986 15.159C10.9148 15.155 10.8341 15.1267 10.766 15.0777C10.698 15.0287 10.6457 14.9609 10.6154 14.8828C10.5851 14.8046 10.5781 14.7193 10.5953 14.6372L11.0735 11.798C11.0941 11.7321 11.098 11.6621 11.085 11.5943C11.0719 11.5265 11.0423 11.463 10.9988 11.4094L8.89179 9.39208C8.8359 9.33546 8.79667 9.26455 8.77841 9.18713C8.76013 9.10971 8.76354 9.02875 8.78824 8.95311C8.81293 8.8775 8.85796 8.81013 8.9184 8.7584C8.97884 8.70668 9.05235 8.67257 9.13088 8.65984L11.9851 8.24143C12.0561 8.23424 12.124 8.20832 12.1818 8.16631C12.2395 8.12431 12.2851 8.06773 12.3138 8.00234L13.5989 5.41713C13.6333 5.34397 13.6875 5.28185 13.7554 5.23786C13.8232 5.19385 13.902 5.16972 13.9828 5.16815C14.0637 5.16661 14.1433 5.18769 14.2128 5.22907C14.2823 5.27042 14.3388 5.33039 14.376 5.40219ZM23.9775 17.1439C22.3767 19.5396 19.9366 21.3267 17.0777 22.0849L19.7363 26.6897C19.9266 27.0195 20.2967 27.2019 20.6741 27.1522C21.0515 27.1025 21.3619 26.8305 21.4604 26.4627L22.4181 22.8889L25.992 23.8464C26.3596 23.9451 26.7506 23.8124 26.9823 23.5104C27.214 23.2083 27.2409 22.7965 27.0506 22.4669L23.9775 17.1439ZM10.9205 22.0876C8.06092 21.332 5.6196 19.547 4.01696 17.1531L0.949095 22.4669C0.75876 22.7965 0.785755 23.2083 1.01749 23.5104C1.24923 23.8124 1.64007 23.9451 2.00777 23.8464L5.58163 22.8889L6.53924 26.4627C6.63776 26.8305 6.94809 27.1025 7.3255 27.1522C7.70291 27.2019 8.07309 27.0195 8.26344 26.6897L10.9205 22.0876Z" fill="#240205"/>
                                </svg>
                            </div>
                            <p className='achievements-number'>100+</p>
                            <p className='achievements-subtitle'>Scholarship secured</p>
                        </div>
                        <div className='block'>
                            <div className='icon-bg'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className='achievements-icon achievements-icon-1'>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4764 1.30574C12.9428 1.04756 13.4671 0.912109 14.0002 0.912109C14.5333 0.912109 15.0576 1.04756 15.524 1.30574C15.9898 1.56362 16.3826 1.93549 16.6655 2.38652L16.6665 2.38816L20.0516 7.74492L24.3323 8.26942C24.8926 8.33303 25.4252 8.54786 25.8728 8.89098C26.3219 9.2352 26.6686 9.69547 26.8753 10.2222C27.0822 10.7489 27.1413 11.3221 27.0464 11.8799C26.9516 12.4378 26.7063 12.9591 26.3368 13.3878L26.3332 13.392L22.6956 17.5641L23.8739 23.3689L23.8752 23.3761C23.9893 23.9604 23.934 24.565 23.7162 25.1189C23.4984 25.6731 23.127 26.1533 22.6457 26.5036L22.6346 26.5117C22.1497 26.8537 21.5782 27.0527 20.9856 27.0856C20.3934 27.1184 19.8039 26.9844 19.2843 26.6984L14.0002 23.8068L8.71715 26.6979C8.19756 26.9838 7.60699 27.1184 7.01486 27.0856C6.4223 27.0527 5.85093 26.8537 5.36598 26.5117L5.35472 26.5038C4.87336 26.1535 4.50199 25.6731 4.28419 25.1189C4.06636 24.565 4.01117 23.9604 4.12511 23.3761L4.1265 23.3689L5.30482 17.5641L1.66719 13.392L1.66355 13.3878C1.29419 12.9591 1.04885 12.4378 0.953948 11.8799C0.859046 11.3221 0.918195 10.7489 1.12502 10.2222C1.33184 9.69547 1.67849 9.2352 2.12761 8.89098C2.57528 8.54786 3.10783 8.33303 3.66821 8.26942L7.94877 7.74492L11.3338 2.38816L11.3349 2.38652C11.6178 1.93549 12.0105 1.56362 12.4764 1.30574ZM15.1766 9.97049C15.1766 9.32073 14.6499 8.79402 14.0002 8.79402C13.3504 8.79402 12.8237 9.32073 12.8237 9.97049C12.8237 10.4354 12.4468 10.8123 11.9819 10.8123H11.3092C10.6594 10.8123 10.1327 11.339 10.1327 11.9887C10.1327 12.6385 10.6594 13.1652 11.3092 13.1652H11.9819C12.2733 13.1652 12.5555 13.1262 12.8237 13.0531V16.867H11.3092C10.6594 16.867 10.1327 17.3938 10.1327 18.0435C10.1327 18.6933 10.6594 19.22 11.3092 19.22H16.6912C17.3409 19.22 17.8677 18.6933 17.8677 18.0435C17.8677 17.3938 17.3409 16.867 16.6912 16.867H15.1766V9.97049Z" fill="#240205"/>
                                </svg>
                            </div>
                            <p className='achievements-number'>75+</p>
                            <p className='achievements-subtitle'>Perfect Reviews</p>
                        </div>
                    </div>
                </section>
            </section>
            <section className='testimonials-section flex' >
                <section className='block'>
                    <div className='comment-text-area'>
                        <h2 className='testimonials-title'>What our clients say</h2>
                        <p className='testimonials-subtitle mt-5'>Take a closer look at what customers are saying about us.</p>
                    </div>
                    <section className='mt-20'>
                        <CommentSlider />
                    </section>
                    
                </section>
               
               
            </section>
            {/* <Footer /> */}
        </section>
        
        </>

    );
};






export default Home;