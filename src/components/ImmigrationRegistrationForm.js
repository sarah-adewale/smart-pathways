import React, { useState } from 'react';
import Button from './Button';
import CustomLink from './CustomLink';

const Page1 = ({ onNext, onCancel}) => (
  <div style={popupStyle}>
    <img src="/images/immigration-form-page1.png" alt="Page 1" style={headerImageStyle} />
    <h2 style={formTitleStyle }>Learn about Canadian culture, customs, and local tips to adapt seamlessly to your new home</h2>
    <div style={buttonContainerStyle}>
      <Button onClick={onCancel} style={cancelButtonStyle}>
        Cancel
      </Button>
      <Button onClick={onNext} style={{color: '#DDD4D5', width: '224px'}}>
        Fill Assessment Form
      </Button>
    </div>
  </div>
);

const Page2 = ({ onNext, onBack }) => (
  <div style={popupStyle1} >
    <h2 style={subtitleStyle }>Contact Information</h2>
    <div className='flex gap-4 loading-bar'>
        <div style={{borderRadius: '4px', background: '#A2D85D', width: '32px', height: '4px'}}></div>
        <div style={{borderRadius: '4px', background: '#F0F0EB', width: '32px', height: '4px'}}></div>
    </div>
    <p style={paginationStyle} >Step 1 of 2</p>
    <form className='mt-5'>
      <label style={labelStyle}>
        First Name
        <input type="text" name="firstName" style={inputStyle} placeholder='Geller'/>
      </label>
      <label style={labelStyle}>
        Last Name
        <input type="text" name="lastName" style={inputStyle} placeholder='Geller'/>
      </label>
      <label style={labelStyle}>
        Contact
        <div className='flex gap-4'>
            <select name="" id="" style={inputStyleDropdown} >
                <option value="" >Email</option>
                <option value="">Phone Number</option>
            </select>
           
            <input type="text" name="contact" style={inputStyle} placeholder='ross.geller@mail.com'/>
        </div>
        
      </label>
      <div style={buttonContainerStyle1} className='mb-5'>
        <Button onClick={onBack} style={backButtonStyle}>
          Back
        </Button>
        <Button onClick={onNext}>
          Next
        </Button>
      </div>
    </form>
  </div>
);

const Page3 = ({ onNext, onBack }) => (
  <div style={popupStyle}>
    <h2 style={subtitleStyle}>Immigration Information</h2>
    <div className='flex gap-4 loading-bar'>
        <div style={{borderRadius: '4px', background: '#A2D85D', width: '32px', height: '4px'}}></div>
        <div style={{borderRadius: '4px', background: '#A2D85D', width: '32px', height: '4px'}}></div>
    </div>
    <p style={paginationStyle} >Step 1 of 2</p>
    <form className='mt-7'>
    <label style={labelStyle}>
      Immigration status
      <select name="" id="" style={inputStyle}>
        <option value="">Please select</option>
        <option value="">Not Applicable</option>
      </select>
       
    </label>
    <label style={labelStyle}>
      Last visit to Canada
      <div className='flex gap-4'>
        <select name="" id="" style={inputStyleDropdown}>
          <option value="">Please select</option>
          <option value="">Not Applicable</option>
        </select>
        <select name="" id="" style={inputStyleDropdown}>
          <option value="">Please select</option>
          <option value="">Not Applicable</option>
        </select>
      </div>
      
       
    </label>
    <label style={labelStyle}>
      Are you interested in taking a course
      <select name="" id="" style={inputStyle}>
        <option value="">Please select</option>
        <option value="">Not Applicable</option>
      </select>
       
    </label>
    <label style={labelStyle}>
      Do you require financial aid?
      <select name="" id="" style={inputStyle}>
        <option value="">Please select</option>
        <option value="">Not Applicable</option>
      </select>
       
    </label>
    <label style={labelStyle}>
      Will you be travelling with family?
      <div className='flex gap-4'>
        <select name="" id="" style={inputStyleDropdown}>
          <option value="">Please select</option>
          <option value="">Not Applicable</option>
        </select>
        <select name="" id="" style={inputStyleDropdown}>
          <option value="">Please select</option>
          <option value="">Not Applicable</option>
        </select>
      </div>
      
       
    </label>
      <div style={buttonContainerStyle1}>
        <Button onClick={onBack} style={backButtonStyle}>
          Back
        </Button>
        <Button onClick={onNext}>
          Next
        </Button>
      </div>
    </form>
  </div>
);

const Page4 = ({ onClose}) => (
  <div style={successPopupStyle}>
    <div className='flex gap-5'>
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
        <path d="M0.25 2.5C0.25 1.67157 0.92157 1 1.75 1H10.25C11.0784 1 11.75 1.67157 11.75 2.5V12.5C11.75 13.3284 11.0784 14 10.25 14H1.75C0.92157 14 0.25 13.3284 0.25 12.5V2.5Z" fill="#ECFED5"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.50006 0C3.94778 0 3.50006 0.447716 3.50006 1V1.5C3.50006 2.05229 3.94778 2.5 4.50006 2.5H7.50006C8.05235 2.5 8.50006 2.05229 8.50006 1.5V1C8.50006 0.447715 8.05235 0 7.50006 0H4.50006ZM9.10006 6.95C9.34856 6.61863 9.28146 6.14853 8.95008 5.9C8.61871 5.65147 8.14861 5.71863 7.90008 6.05L5.32577 9.48241L4.4161 8.87596C4.07146 8.6462 3.60581 8.73933 3.37604 9.08397C3.14628 9.42862 3.23941 9.89427 3.58405 10.124L5.08405 11.124C5.41525 11.3448 5.86125 11.2684 6.10008 10.95L9.10006 6.95Z" fill="#A2D85D"/>
      </svg>
      <h2 style={successTitleStyle}>Form completed successfully</h2>
    </div>
    
    <p style={successSubtitleStyle}>Thank you for completing the form. We’ll contact you with further details. </p>
    <CustomLink onClick={onClose} style={successCancelButtonStyle}>
      Okay, Thanks
    </CustomLink>
  </div>
);

const RegistrationForm = ({ onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const cancelForm = () => {
    onClose();
  };

  return (
    <div style={overlayStyle}>
      {currentPage === 1 && <Page1 onNext={nextPage} onCancel={cancelForm} />}
      {currentPage === 2 && <Page2 onNext={nextPage} onBack={prevPage} />}
      {currentPage === 3 && <Page3 onNext={nextPage} onBack={prevPage} />}
      {currentPage === 4 && <Page4 onClose={onClose} />}
    </div>
  );
};

 const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-end',
    // alignItems: isMobile ? 'flex-end' : 'center',
  };

  const popupStyle = {
    width: '480px',
    height: '632px',
    marginRight: '30px',
    marginTop: '30px',
    borderRadius: '12px',
    background: '#fff',
    padding: '20px',
    boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
  };

  const successTitleStyle = {
    color: '#DDD4D5',
    fontFamily: 'Inter',
    fontSize: '1.6rem',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '18px',
  }

    const popupStyle1 = {
    width: '480px',
    height: '462px',
    marginRight: '30px',
    marginTop: '30px',
    borderRadius: '12px',
    background: '#fff',
    padding: '20px',
    boxShadow: '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
  };

  const successPopupStyle = {
    width: '480px',
    height: '137px',
    marginRight: '30px',
    marginTop: '30px',
    borderRadius: '8px',
    background: '#120102',
    padding: '20px',
  }

  const buttonContainerStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'right',
    alignContent: 'flex-end',
    gap: '10px',
    justifyContent: 'flex-end',
    marginTop: '60px',
  };

    const buttonContainerStyle1 = {
    display: 'flex',
    alignItems: 'flex-end',
    textAlign: 'right',
    alignContent: 'flex-end',
    gap: '10px',
    justifyContent: 'flex-end',
    marginTop: '30px',
  };

  const successSubtitleStyle = {
    color: '#BCABAC',
    fontFamily: 'Inter',
    fontSize: '1.5rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px',
    marginTop: '15px'
  }

//   if (isMobile) {
//     popupStyle.position = 'fixed';
//     popupStyle.bottom = 0;
//     popupStyle.left = 0;
//     popupStyle.right = 0;
//     popupStyle.height = '650px'
//     popupStyle.width = '100%'
//     buttonContainerStyle.flexDirection = 'column'
//     buttonContainerStyle.justifyContent = 'center'
//     buttonContainerStyle.alignContent = 'center'
//     buttonContainerStyle.alignItems = 'center'
//     buttonContainerStyle.textAlign = 'center'
//   } else {
//     popupStyle.position = 'fixed';
//     popupStyle.top = 0;
//     popupStyle.right = 0;
//   }

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
    marginTop: '50px',
  };

  const subtitleStyle = {
    textAlign: 'left',
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#4F4F4E',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '20px',
    
  };

  const paginationStyle = {
    color: '#7A7A78',
    fontFamily: 'Inter',
    fontSize: '12px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    marginTop: '10px'
  }

  const cancelButtonStyle = {
    cursor: 'pointer',
    color:  '#4F4F4E',
   background: '#fff',
   border: 'none',
   padding: '10px'

  };

const successCancelButtonStyle = {
      display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
    alignItems: 'flex-end',
    textAlign: 'right',
    cursor: 'pointer',
    color:  '#A2D85D',
    fontFamily: 'Inter',
    fontSize: '1.4rem',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
   padding: '10px'
}

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

  const inputStyleDropdown = {
     display: 'flex',
    padding: '10px 14px',
    alignTtems: 'center',
    gap: '8px',
    alignSelf: 'stretch',
    borderRadius: '8px',
    border: '1px solid #D0D5DD',
    background: '#FFF',
    height: '44px',
    boxShadow: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    marginLeft: '0px',
    width: '50%',
    marginTop: '8px',
    fontSize: '1.4rem',
    fontWeight: '500'
  }

const backButtonStyle = {
  cursor: 'pointer',
  color:  '#4F4F4E',
  background: '#fff',
  border: 'none',
  padding: '10px',
  width: '',
  marginRight: '10px',
};

export default RegistrationForm;

