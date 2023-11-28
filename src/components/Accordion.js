import React, { useState, useEffect } from 'react';


const Accordion = () => {
  const accordionData = [
    {
      title: 'Career Navigations',
      content: 'Embark on a personalised career journey and create a roadmap to achieve your career aspirations',
      image: '/images/service-img.png', // Replace with the actual image URL
    },
    {
      title: 'Study Consultation and Application',
      content: 'Embark on a personalised career journey and create a roadmap to achieve your career aspirations',
      image: '/images/service-img2.png', // Replace with the actual image URL
    },
    {
      title: 'Visa Processing Assistance',
      content: 'Embark on a personalised career journey and create a roadmap to achieve your career aspirations',
      image: '/images/service-img3.png', // Replace with the actual image URL
    },
    {
      title: 'Resume Preparation',
      content: 'Embark on a personalised career journey and create a roadmap to achieve your career aspirations',
      image: '/images/service-img4.png', // Replace with the actual image URL
    },
    {
      title: 'Interview Preparation',
      content: 'Embark on a personalised career journey and create a roadmap to achieve your career aspirations',
      image: '/images/service-img5.png', // Replace with the actual image URL
    },
    {
      title: 'Career Bootcamps',
      content: 'Embark on a personalised career journey and create a roadmap to achieve your career aspirations',
      image: '/images/service-img6.png', // Replace with the actual image URL
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % accordionData.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [accordionData.length]);

  const handleAccordionHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
    <div className='flex'>
        <div className="accordion-container mt-20">
            <div>
                {accordionData.map((item, index) => (
                <div
                key={index}
                className={`accordion-item ${index === activeIndex ? 'active' : ''}`}
                onMouseOver={() => handleAccordionHover(index)}
                >   
                    <div className='flex'>
                        <div className="icon"></div>
                        <div className="accordion-title service-title">{item.title}</div>
                    </div>
                    <div className="accordion-content service-subtitle mt-5">{item.content}</div>
                </div>
                ))}
                
            </div>
            
        </div>
        <div className="image-container">
            <img src={accordionData[activeIndex].image} alt={`Accordion ${activeIndex + 1}`} />
        </div>
    </div>
    </>
    
  );
};

export default Accordion;


// export default Accordion;

