import React from 'react';
import Slider from 'react-slick';
import CommentCard from './CommentCard'; 

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const CommentSlider = () => {

  const comments = [
    {
        comm: "I will rate the Smart Pathways service a 10/10. It was Great. They helped me avoid mistakes and pitfalls in my admission process.",
        //  named: "Precious",
         school: "Precious"
       
    },
    {
       comm: "A friend recommended them, and I can honestly say it was the best decision I made as a PR in Canada. They were so consistent, and I love that.",
        //  named: "Ross Geller",
         school: "Brian"
    },
    {
        comm: "The staff at Smart Pathways are the best. Beyond their excellent services, you could tell that they genuinely care and want to help.",
        //  named: "Phoebe Buffay",
         school: "Tolu"
    },
     {
        comm: "One thing I’d say about Smart Pathways is you will get results. They are transparent and effective. As an international student from Ghana, i can tell you, It's rare",
        //  named: "Joey Tribbiani",
         school: "Becky"
    }, {
        comm: "Smart Pathways helped me through my scholarship application process. Their services are top-notch, and I will 100% refer anybody",
        //  named: "Sarah Ruth",
         school: "Joshua Karis"
    },
     {
        comm: "I joined one of the webinars for PRs, and it changed how I approached my job search. Months later, I have gotten multiple offers, and I am finally settled.",
        //  named: "Kenenna Agbo",
         school: "Ama"
    }
]

  const settings = {
    dots: false,
    infinite: true,
    draggable: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    touchThreshold: 1000,
    prevArrow: false, 
    nextArrow: false, 

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="comment-slider">
      <Slider {...settings}>
        {comments.map(({comm, named, school, index}) => (
          <div key={index} className="comment-slider-item">
            <CommentCard comm={comm} named={named} school={school} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CommentSlider;
