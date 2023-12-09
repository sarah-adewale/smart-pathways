import React, { useState } from 'react';

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#360308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#360308" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
);

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    { question: 'Is there a free trial available?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', isOpen: true },
    { question: 'Can I change my plan later?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', isOpen: false },
    { question: 'What is your cancellation policy?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', isOpen: false },
    { question: 'Can other info be added to an invoice?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', isOpen: false },
    { question: 'How does billing work?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', isOpen: false },
    { question: 'How do I change my account email?', answer: 'Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.', isOpen: false },
    // Add more FAQs as needed
  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <div>
      {faqs.map((faq, index) => (
        <div key={index} style={{ borderBottom: '1px solid #EAECF0', padding: '10px', display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div className='faq-title'>{faq.question}</div>
            {faq.isOpen && <div className='faq-content'>{faq.answer}</div>}
          </div>
          <div style={{ cursor: 'pointer' }} onClick={() => toggleFAQ(index)}>
            {faq.isOpen ? <MinusIcon /> : <PlusIcon />}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
