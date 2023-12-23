import React, { useState } from 'react';
import Button from './Button';
// import CustomLink from './CustomLink';

const countries = ["Select Country", "USA", "Canada", "UK", "Australia", "Other"];

const PopupForm = ({ onClose, isMobile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: 'Select Country',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted with data:', formData);
    // Close the form after submission
    onClose();
  };

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: isMobile ? 'flex-end' : 'center',
  };

  const popupStyle = {
    width: '480px',
    height: '632px',
    marginRight: '30px',
    marginTop: '30px',
    borderRadius: '12px',
    background: '#fff',
    padding: '20px',
    boxSizing: 'border-box',
    boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
  };


  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'right',
    alignContent: 'flex-end',
    gap: '10px',
    justifyContent: 'flex-end',
    marginTop: '30px',
  };

  if (isMobile) {
    popupStyle.position = 'fixed';
    popupStyle.bottom = 0;
    popupStyle.left = 0;
    popupStyle.right = 0;
    popupStyle.height = '650px'
    popupStyle.width = '100%'
    buttonContainerStyle.flexDirection = 'column'
    buttonContainerStyle.justifyContent = 'center'
    buttonContainerStyle.alignContent = 'center'
    buttonContainerStyle.alignItems = 'center'
    buttonContainerStyle.textAlign = 'center'
  } else {
    popupStyle.position = 'fixed';
    popupStyle.top = 0;
    popupStyle.right = 0;
  }

  const headerImageStyle = {
    width: '100%',
    marginBottom: '10px',
  };

  const formTitleStyle = {
    textAlign: 'center',
    fontSize: '2.4rem',
    margin: '0',
    color: '#101828',
    fontFamily: 'Playfair Display',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 'normal',
  };

  const subtitleStyle = {
    textAlign: 'center',
    fontSize: '1.4rem',
    marginBottom: '20px',
    color: '#4F4F4E',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '300',
    lineHeight: '20px',
  };


  const cancelButtonStyle = {
    cursor: 'pointer',
    color:  '#4F4F4E',
   background: '#fff',
   border: 'none',
   padding: '10px'

  };



  const labelStyle = {
    fontSize: '1.4rem',
    color: '#4F4F4E',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  }

  const inputStyle = {
    display: 'flex',
    padding: '10px 14px',
    alignTtems: 'center',
    gap: '8px',
    alignSelf: 'stretch',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFF',
    width: '100%',
    height: '44px',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    marginLeft: '0px',
    marginTop: '8px',
   
  }

  return (
    <div style={overlayStyle}>
      <div style={popupStyle}>
        <img src="/images/brochure-form-img.png" alt="Header" style={headerImageStyle} />
        <h2 style={formTitleStyle}>Get the official <br></br> Smart Pathways brochure</h2>
        <p style={subtitleStyle}>Provide the required details below</p>
        <form onSubmit={handleSubmit}>
          <label style={labelStyle}>
            Name
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Ross Geller' style={inputStyle}/>
          </label>
          <label style={labelStyle}>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='ross.geller@mail.com' style={inputStyle}/>
          </label>
          <label style={labelStyle}>
            Country of Residence
            <select name="country" value={formData.country} onChange={handleChange} style={inputStyle}>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </label>
          <div style={buttonContainerStyle}>
            <Button type="submit" onClick={onClose} >Get Brochure</Button>
            <Button onClick={onClose} style={cancelButtonStyle}>Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PopupForm;
