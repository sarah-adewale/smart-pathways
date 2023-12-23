import React, { useState } from 'react';
import Button from './Button';
import RegistrationForm from './ImmigrationRegistrationForm';
// import { useEffect } from 'react';
// import Carlendar 

const icons = {
  'Book an appointment': <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 0.5C4.05228 0.5 4.5 0.947715 4.5 1.5V2.5H9.50009V1.5C9.50009 0.947715 9.94781 0.5 10.5001 0.5C11.0524 0.5 11.5001 0.947715 11.5001 1.5V2.5H12.5C13.3284 2.5 14 3.17157 14 4V5H0V4C0 3.17157 0.671573 2.5 1.5 2.5H2.5V1.5C2.5 0.947715 2.94772 0.5 3.5 0.5Z" fill="#572D31"/>
  <path d="M0 5H14V13C14 13.8284 13.3284 14.5 12.5 14.5H1.5C0.671573 14.5 0 13.8284 0 13V5Z" fill="#BCABAC"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 7.25C7.75 6.83579 7.41421 6.5 7 6.5C6.58579 6.5 6.25 6.83579 6.25 7.25V9H4.5C4.08579 9 3.75 9.33579 3.75 9.75C3.75 10.1642 4.08579 10.5 4.5 10.5H6.25V12.25C6.25 12.6642 6.58579 13 7 13C7.41421 13 7.75 12.6642 7.75 12.25V10.5H9.5C9.91421 10.5 10.25 10.1642 10.25 9.75C10.25 9.33579 9.91421 9 9.5 9H7.75V7.25Z" fill="#572D31"/>
</svg>,
  'Immigration assessment form': <svg xmlns="http://www.w3.org/2000/svg" width="12" height="15" viewBox="0 0 12 15" fill="none">
  <path d="M3 2C3 1.17157 3.67157 0.5 4.5 0.5H10C10.8284 0.5 11.5 1.17157 11.5 2V10.5C11.5 11.3284 10.8284 12 10 12H4.5C3.67157 12 3 11.3284 3 10.5V2Z" fill="#572D31"/>
  <path d="M0.5 4.5C0.5 3.67157 1.17157 3 2 3H7.5C8.32843 3 9 3.67157 9 4.5V13C9 13.8284 8.32843 14.5 7.5 14.5H2C1.17157 14.5 0.5 13.8284 0.5 13V4.5Z" fill="#BCABAC"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.12478 5.5C2.12478 5.15482 2.40461 4.875 2.74978 4.875H6.74978C7.09496 4.875 7.37478 5.15482 7.37478 5.5C7.37478 5.84518 7.09496 6.125 6.74978 6.125H2.74978C2.40461 6.125 2.12478 5.84518 2.12478 5.5ZM2.12527 8C2.12527 7.65482 2.40509 7.375 2.75027 7.375H6.75027C7.09545 7.375 7.37527 7.65482 7.37527 8C7.37527 8.34518 7.09545 8.625 6.75027 8.625H2.75027C2.40509 8.625 2.12527 8.34518 2.12527 8ZM2.74951 9.875C2.40433 9.875 2.12451 10.1548 2.12451 10.5C2.12451 10.8452 2.40433 11.125 2.74951 11.125H4.74951C5.09469 11.125 5.37451 10.8452 5.37451 10.5C5.37451 10.1548 5.09469 9.875 4.74951 9.875H2.74951Z" fill="#572D31"/>
</svg>,
  'Start application': <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.93981 1.16119C7.62065 0.283508 6.37938 0.283514 6.06022 1.16119L4.62035 5.12083L0.660698 6.5607C-0.21698 6.87986 -0.216974 8.12114 0.660699 8.44029L4.62035 9.88016L6.06022 13.8398C6.37938 14.7175 7.62066 14.7175 7.93981 13.8398L9.37968 9.88016L13.3393 8.44029C14.217 8.12113 14.217 6.87986 13.3393 6.5607L9.37968 5.12083L7.93981 1.16119Z" fill="#BCABAC"/>
</svg>,
};

  // const icons = [<Carlendar/>, <MultipleFile/>, <Star/>]

  const DropdownLink = ({ text, link, onClick, }) => (
  <a href={link} onClick={onClick} className='dropdown-links flex gap-4'>
   {icons[text]} {text}
    
  </a>
);



const ButtonWithDropdown = ({ buttonText, dropdownItems}) => {
  const [showDropdown, setShowDropdown] = useState(false);


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };



const [isRegistrationFormOpen, setIsRegistrationFormOpen] = useState(false);

  const handleOpenRegistrationForm = () => {
    setIsRegistrationFormOpen(true);
  };

  const handleCloseRegistrationForm = () => {
    setIsRegistrationFormOpen(false);
  };



  return (
    <div className="button-with-dropdown">
      <Button onClick={toggleDropdown}>
        {buttonText} 
      </Button>
      {showDropdown && (
        <div className="dropdown-new">
          {dropdownItems.map((item, index) => (
            <a key={index} href={item.link} className="dropdown-item-new">
                <div className='flex gap-4 dropdown-item-new-link'>
                    {item.text === 'Immigration assessment form' ? (
                <DropdownLink
               
                  text={item.text}
                  link={item.link}
                  onClick={handleOpenRegistrationForm}
                />
              ) : ( < DropdownLink
              
                  text={item.text}
                  link={item.link}
               
                /> )}
                </div>
            </a>
          ))}
         
        </div>
      )}
       {isRegistrationFormOpen && (
            <RegistrationForm onClose={handleCloseRegistrationForm}/>
          )}
              
    </div>
    
  );
};

export default ButtonWithDropdown;
