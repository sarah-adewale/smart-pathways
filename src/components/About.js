import React from "react";
import FAQ from "./FAQ";

function About(){

    return (
        <section className='body-bg'>
            <section className='about-hero-section'>
                <section className='about-hero-background' >
                    <div className="pt-56 pb-56 about-hero-content">
                        <div className="flex about-hero-image">
                            <img src="/images/about-hero-image3.png" alt="" />
                            <img src="/images/about-hero-image2.png" alt="" />

                        </div>
                        <div className="about-hero-text-area">
                            <p className="about-hero-text">Welcome to</p>
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="627" height="120" viewBox="0 0 627 120" fill="none" className="about-hero-circle">
                                    <path d="M81.306 42.9867C83.0667 43.1473 84.7414 43.4642 86.2647 43.9251C90.381 45.1679 92.551 47.7821 90.8022 50.3352C88.8368 53.1971 82.9034 54.4541 77.7598 55.589C65.7298 58.2514 54.5222 62.0502 44.7012 66.7941C42.8086 67.684 41.1668 68.7196 39.8379 69.8614C31.8253 76.9551 42.8338 82.4071 53.2027 85.3907C77.9309 92.488 106.612 95.3205 135.213 96.9576C211.576 101.328 289.964 97.7535 367.774 93.7668C428.152 90.6749 490.372 88.6663 549.085 76.9748C568.646 73.0802 608.021 65.3781 598.185 50.2016C596.112 47.1661 592.597 44.5318 587.967 42.5435C577.84 38.0255 563.636 35.0906 551.023 32.5861C510.465 24.5387 466.638 20.9761 422.775 18.8185C362.411 15.9188 301.227 15.8857 239.913 18.7196C181.725 21.3532 113.716 24.0147 58.7181 37.5762C56.2967 34.9096 61.5636 31.7517 66.334 29.874C98.0006 17.5267 137.025 12.4861 173.756 8.93816C305.549 -3.79121 458.358 -4.93784 578.828 21.0282C598.359 25.2347 618.699 31.3786 624.47 42.3705C632.076 56.9284 610.329 72.7917 585.938 82.1816C548.889 96.4418 504.195 102.502 460.646 106.818C396.271 113.191 331.441 116.477 266.816 118.144C209.877 119.609 152.822 119.829 97.1244 115.992C72.8457 114.326 48.1347 111.678 27.2655 105.2C18.4545 102.453 6.66476 98.5423 3.14584 93.1724C-1.05528 87.0101 -0.924902 80.0481 3.51373 73.5207C5.87776 69.9525 9.29592 66.5693 13.6282 63.5097C26.3169 54.5793 45.0765 48.7063 64.2307 44.7004C69.77 43.5159 75.7622 42.4917 81.306 42.9867Z" fill="#A2D85D"/>
                                        <text x="50%" y="50%" text-anchor="middle" fill="#FBFBF6" stroke-width="1px" dy=".3em" className="svg-text">Smart Pathways</text>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="373" height="75" viewBox="0 0 373 75" fill="none" className="about-hero-circle-mobile">
                                    <path d="M33.5717 27.4083C34.6658 27.508 35.7066 27.705 36.6532 27.9914C39.2113 28.7637 40.5598 30.3883 39.473 31.9749C38.2516 33.7534 34.5643 34.5345 31.3679 35.2398C23.892 36.8943 16.9271 39.255 10.8239 42.2031C9.64783 42.7561 8.62752 43.3997 7.80169 44.1093C2.82234 48.5176 9.66347 51.9057 16.1072 53.7598C31.4742 58.1704 49.2979 59.9306 67.0717 60.9479C114.527 63.6641 163.24 61.4425 211.595 58.9651C249.116 57.0436 287.782 55.7954 324.269 48.5298C336.425 46.1096 360.894 41.3231 354.781 31.8918C353.493 30.0055 351.309 28.3684 348.431 27.1328C342.138 24.3251 333.311 22.5013 325.473 20.9449C300.269 15.9439 273.032 13.7299 245.774 12.3891C208.262 10.5871 170.24 10.5666 132.136 12.3276C95.9764 13.9643 53.7124 15.6182 19.5346 24.0459C18.0298 22.3888 21.303 20.4264 24.2675 19.2595C43.9464 11.5864 68.198 8.4539 91.0238 6.24909C172.925 -1.66146 267.887 -2.37403 342.752 13.7623C354.889 16.3764 367.529 20.1945 371.116 27.0253C375.843 36.0722 362.328 45.9302 347.17 51.7655C324.147 60.6274 296.372 64.3937 269.309 67.0757C229.304 71.0359 189.016 73.0778 148.855 74.1139C113.471 75.0243 78.0146 75.1609 43.4018 72.7767C28.3141 71.7411 12.9577 70.0957 -0.0112579 66.07C-5.48679 64.3628 -12.8134 61.9327 -15.0002 58.5956C-17.611 54.7662 -17.5299 50.4397 -14.7716 46.3833C-13.3025 44.1658 -11.1783 42.0634 -8.48605 40.1621C-0.600813 34.6123 11.0572 30.9626 22.9604 28.4732C26.4027 27.7371 30.1265 27.1006 33.5717 27.4083Z" fill="#A2D85D"/>
                                    <text x="50%" y="50%" text-anchor="middle" fill="#FBFBF6" stroke-width="1px" dy=".3em" className="svg-text">Smart Pathways</text>
                                </svg>

                                {/* <h2>Smart Pathways</h2> */}
                                
                            </div>
                            <p className="about-hero-text-2">Your guide to career success</p>
                        </div>
                        <div className="flex about-hero-image">
                            <img src="/images/about-hero-image.png" alt="" />
                            <img src="/images/about-hero-image4.png" alt="" />

                        </div>
                    </div>
                </section>
            </section>

            <section className="about-us-section">
                <section className="about-us-section-bg">
                    <div className="about-us-content-section">
                        <h2 className="about-us-text">About us</h2>
                        <p className="about-us-text-1">At SmartPathways, we understand that choosing the right university and program can be overwhelming. That’s <br></br> why our team of experts is here to guide you every step of the way. From helping you select the perfect <br></br> university to providing the right support with assisting with accommodation, SmartPathways covers it for you</p>
                        <img src="/images/about-us-img.png" alt="" />
                    </div>

                </section>
            </section>

            <section className="value-section">
                <section className="value-content-section flex gap-22">
                    <section>
                        <div className="flex gap-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                                <path d="M16.5576 32C25.3942 32 32.5576 24.8366 32.5576 16C32.5576 7.16344 25.3942 0 16.5576 0C7.72106 0 0.557617 7.16344 0.557617 16C0.557617 24.8366 7.72106 32 16.5576 32Z" fill="#79575A"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M26.8089 0.865701C26.7092 0.466254 26.4021 0.151403 26.0053 0.0414956C25.6084 -0.0684116 25.1833 0.0436183 24.8921 0.334761L20.3207 4.90619C20.0369 5.19006 19.9227 5.60203 20.0201 5.9915L20.8448 9.29038C20.8338 9.30085 20.8228 9.31147 20.812 9.32231L15.3442 14.7901C14.6748 15.4596 14.6748 16.545 15.3442 17.2144C16.0137 17.8839 17.0991 17.8839 17.7686 17.2144L23.2364 11.7467C23.2475 11.7356 23.2584 11.7244 23.2691 11.7131L26.5659 12.5373C26.9554 12.6347 27.3673 12.5206 27.6512 12.2367L32.2226 7.66528C32.5138 7.37415 32.6258 6.94889 32.5159 6.55209C32.4059 6.15531 32.0912 5.8483 31.6917 5.74843L27.7856 4.77189L26.8089 0.865701ZM17.2824 1.73278C17.348 2.67728 16.6355 3.49614 15.691 3.56176C13.3033 3.72763 11.0133 4.57545 9.09325 6.00448C7.17316 7.43351 5.70365 9.3837 4.85928 11.6233C4.01492 13.8629 3.83122 16.2979 4.32998 18.6389C4.82875 20.9798 5.98902 23.1285 7.67295 24.8293C9.35691 26.5303 11.4937 27.712 13.8295 28.2343C16.1654 28.7566 18.602 28.5975 20.85 27.7755C23.098 26.9538 25.0629 25.504 26.5111 23.5984C27.9593 21.6927 28.8302 19.4114 29.0201 17.0254C29.0951 16.0816 29.9211 15.3774 30.8649 15.4525C31.8087 15.5276 32.5129 16.3536 32.4377 17.2974C32.1959 20.3377 31.0864 23.2446 29.2409 25.6729C27.3954 28.101 24.8916 29.9486 22.0272 30.9957C19.1627 32.043 16.0578 32.2457 13.0814 31.5803C10.105 30.9147 7.38219 29.4089 5.23645 27.2416C3.09069 25.0741 1.61222 22.3363 0.976673 19.3533C0.341127 16.3704 0.575219 13.2677 1.65114 10.4138C2.72706 7.56 4.59958 5.07499 7.04623 3.25406C9.49291 1.43313 12.4108 0.3528 15.4534 0.141426C16.3979 0.0758092 17.2168 0.788283 17.2824 1.73278ZM15.747 9.27534C16.0921 10.157 15.6572 11.1515 14.7756 11.4966C14.0254 11.7903 13.3602 12.2664 12.8402 12.8817C12.3203 13.4971 11.9619 14.2324 11.7975 15.0211C11.6331 15.8098 11.6679 16.6271 11.8988 17.3989C12.1296 18.1708 12.5492 18.873 13.1196 19.4419C13.69 20.0109 14.3932 20.4286 15.1657 20.6575C15.9382 20.8864 16.7555 20.919 17.5438 20.7526C18.3321 20.5862 19.0664 20.2259 19.6805 19.7044C20.2945 19.1828 20.7689 18.5164 21.0606 17.7655C21.4035 16.8829 22.3969 16.4455 23.2794 16.7884C24.1618 17.1312 24.5993 18.1246 24.2565 19.0071C23.7584 20.2893 22.9485 21.427 21.9001 22.3175C20.8517 23.208 19.5978 23.8231 18.252 24.1072C16.9061 24.3913 15.5107 24.3355 14.1918 23.9449C12.8729 23.5541 11.6723 22.8408 10.6984 21.8694C9.72447 20.898 9.00806 19.6992 8.61394 18.3813C8.21981 17.0635 8.16038 15.6681 8.44104 14.3216C8.72171 12.9749 9.33362 11.7196 10.2214 10.6689C11.1092 9.61822 12.2449 8.8054 13.5257 8.30396C14.4074 7.95881 15.4018 8.39371 15.747 9.27534Z" fill="#DDD4D5"/>
                            </svg>
                            <p className="value-content-title">Our mission</p>
                        </div>
                        <p className="value-content-subtitle mt-8">At SmartPathways, our mission is to empower and support individuals in achieving their educational goals by providing exceptional guidance and personalized services. We are committed to helping students navigate the complex process of studying in Canada, ensuring a smooth and rewarding experience</p>
                    </section>

                    <svg xmlns="http://www.w3.org/2000/svg" width="2" height="206" viewBox="0 0 2 206" fill="none" className="hr-line">
                        <path d="M1 0.5V205.5" stroke="#BCABAC"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="375" height="2" viewBox="0 0 375 2" fill="none" className="hr-line-mobile">
                        <path d="M375 1.23047L-8.9407e-06 1.23045" stroke="#BCABAC"/>
                    </svg>

                    <section className="ml-12 vision">
                        <div className="flex gap-7">
                            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="23" viewBox="0 0 33 23" fill="none" className="eye-svg">
                                <path d="M16.5576 0.0712891C13.0276 0.0712891 9.82825 1.62962 7.26093 3.47927C4.68434 5.33561 2.64454 7.55691 1.40971 9.04932L1.3994 9.06196C0.84796 9.74814 0.557617 10.6177 0.557617 11.5C0.557617 12.3823 0.84796 13.2519 1.3994 13.938L1.40971 13.9507C2.64454 15.4431 4.68434 17.6644 7.26093 19.5207C9.82825 21.3703 13.0276 22.9287 16.5576 22.9287C20.0877 22.9287 23.287 21.3703 25.8543 19.5207C28.431 17.6644 30.4708 15.4431 31.7055 13.9507L31.7158 13.938C32.2673 13.2519 32.5576 12.3823 32.5576 11.5C32.5576 10.6177 32.2673 9.74814 31.7158 9.06196L31.7055 9.04932C30.4708 7.55691 28.431 5.33561 25.8543 3.47927C23.287 1.62962 20.0877 0.0712891 16.5576 0.0712891Z" fill="#DDD4D5"/>
                                <path d="M16.5579 16.6431C19.3982 16.6431 21.7008 14.3406 21.7008 11.5003C21.7008 8.65996 19.3982 6.35742 16.5579 6.35742C13.7176 6.35742 11.415 8.65996 11.415 11.5003C11.415 14.3406 13.7176 16.6431 16.5579 16.6431Z" fill="#572D31"/>
                            </svg>
                            <p className="value-content-title">Our vision</p>
                        </div>
                        <p className="value-content-subtitle mt-8">At SmartPathways, our vision is to be the leading educational agency, recognized for our unwavering commitment in excellence, integrity and student success. We aim to be the go-to-resource for individuals seeking assistance in studying in Canada, offering comprehensive services and fostering a community that nurtures growth, diversity and lifelong learning</p>

                    </section>
                </section>
            </section>
            <section className="faq-section" >
                <section className="faq-content-section">
                    <h2 className="faq-content-section-title">Frequently asked questions</h2>
                    <p className="faq-content-section-subtitle">Everything you need to know about the product and billing.</p>
                    <FAQ />
                </section>

            </section>
        </section>
    );
};

export default About;