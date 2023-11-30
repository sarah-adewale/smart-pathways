import React, { useState } from 'react';
import Button from './Button';


const ButtonWithDropdown = ({ buttonText, dropdownItems, icons }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
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
                    {icons && icons.length > index && <span>{icons[index]}</span>} {item.text}
                </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ButtonWithDropdown;
