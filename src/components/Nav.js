import React from "react";
import CustomLink from "./CustomLink";
import NotifBar from "./NotifBar";
import ButtonWithDropdown from "./ButtonDropdown";
import { ReactComponent as Carlendar} from './svgs/carlender.svg';
import { ReactComponent as MultipleFile } from './svgs/multiplefile.svg'
import { ReactComponent as Star } from './svgs/star.svg'
import { useState } from 'react'; 


function Nav(){

    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

      const dropdownItems = [
    { text: 'Book an appointment', link: '#' },
    { text: 'Immigration assessment form', link: '#' },
    { text: 'Start application', link: '#' },
  ];

  const icons = [<Carlendar/>, <MultipleFile/>, <Star/>]

    return(
        <>
            <header>
                <NotifBar />
                 
                <nav className="flex gap-20">

                    <div className="navbar">
                        <div className="ml-36 site-logo">
                            <CustomLink to="/" ><img src="/images/logo.png" alt="site-logo" /> </CustomLink>
                        </div>
                        <div className="flex gap-96 mobile-menu-section" >
                        <input type="checkbox" id="menu-toggle" className="menu-toggle" checked={menuOpen} onChange={toggleMenu}/>
                        <label htmlFor="menu-toggle" className="hamburger">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </label>
                    
                        <ul className={`menu ${menuOpen ? 'active' : ''}`}>
                            <div className="flex gap-12 mr-72 mobile-nav">
                                <CustomLink to="/about" >About</CustomLink>
                                <CustomLink to="/international-student" class="">International Students</CustomLink>
                                <CustomLink to="/permanent-residence">Permanent Residence</CustomLink>
                            </div>
                        </ul>
                            <div>
                                <div className="get-started-btn flex gap-4 ">
                          
                                    <div className="mr-20">
                                        <div class="dropdown">
                                         
                                            <div className="mr-20">
                                                <div className="dropbtn flex gap-4">
                                                    <ButtonWithDropdown buttonText="Get Started" dropdownItems={dropdownItems} icons={icons}/>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none" className="plus-icon">
                                                        <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#BCABAC"/>
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4C7.75 3.58579 7.41421 3.25 7 3.25C6.58579 3.25 6.25 3.58579 6.25 4V6.25H4C3.58579 6.25 3.25 6.58579 3.25 7C3.25 7.41421 3.58579 7.75 4 7.75H6.25V10C6.25 10.4142 6.58579 10.75 7 10.75C7.41421 10.75 7.75 10.4142 7.75 10V7.75H10C10.4142 7.75 10.75 7.41421 10.75 7C10.75 6.58579 10.4142 6.25 10 6.25H7.75V4Z" fill="#572D31"/>
                                                    </svg>
                                                   
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                    </div>
                    </div> 
                    
                </nav>
            </header>
        </>

    )
}



export default Nav;


