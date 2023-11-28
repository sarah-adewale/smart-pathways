import React from "react";
import CustomLink from "./CustomLink";

function NotifBar(){
    return (
        <>
            <section className="flex notif-bar gap-4">
                <div className="gap-96 flex notif-contact-section">
                    <div className="flex contact-info gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                            <path d="M2.92676 3.20062L3.28379 2.8436C4.06483 2.06255 5.33116 2.06255 6.11221 2.8436L6.73146 3.46285C7.36809 4.09948 7.50087 5.08302 7.05583 5.86567L7.01924 5.93002C6.66269 6.55705 6.66438 7.33297 7.08728 7.91731C7.29797 8.20844 7.53599 8.51002 7.76213 8.73616C7.98827 8.96229 8.28984 9.20032 8.58097 9.41101C9.16531 9.8339 9.94123 9.83559 10.5683 9.47905L10.6326 9.44245C11.4153 8.99742 12.3988 9.13019 13.0354 9.76682L13.6547 10.3861C14.4357 11.1671 14.4357 12.4335 13.6547 13.2145L13.2977 13.5715C12.9226 13.9466 12.4116 14.1556 11.8959 14.0316C10.7937 13.7667 8.66977 12.9436 6.11221 10.3861C3.55466 7.82851 2.73157 5.70458 2.46668 4.60239C2.34273 4.08664 2.55169 3.5757 2.92676 3.20062Z" fill="#FBFBF6"/>
                        </svg>
                        
                        <CustomLink className="phone-number">+1 2345 56768</CustomLink>
                    </div>
                    <section className="flex gap-8 notif-decription-section">
                        <p className="notif-description">Application for summer admission 2023/2024 is now open</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="2" height="24" viewBox="0 0 2 24" fill="none" className="horizontal-line">
                            <path opacity="0.15" d="M1 0V24" stroke="#FBFBF6"/>
                        </svg>
                        {/* <div ></div> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="229" height="2" viewBox="0 0 229 2" fill="none" className="mobile-horizontal-line">
                            <path opacity="0.15" d="M228.5 1L0.499998 1" stroke="#FBFBF6"/>
                        </svg>
                        <div className="notif-bar-link">
                            <CustomLink className="notif-button">Apply Now</CustomLink>
                        </div>
                    </section>
                </div>
                
                
            </section>
        </>
    )
}

export default NotifBar;