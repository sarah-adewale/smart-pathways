// CommentSlider.js
import React from 'react';
import Slider from 'react-slick';
import CommentCard from './CommentCard'; // Create a separate CommentCard component

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './CommentSlider.css';

const CommentSlider = () => {
//   const comments = [
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     "This is another customer comment.",
//     // Add more comments as needed
//   ];

  const comments = [
    {
        comm: "“There’s all this spanish text on my site i'll know it when i see it, nor i need this to work in internet explorer!, are you busy this weekend?”",
         named: "Rachel Greene",
         school: "2016 Vancouver State Alumni"
       
    },
    {
       comm: "“What I found most comforting was that this would allow... all our emplThere’s all this spanish text on my site i'll”",
         named: "Ross Geller",
         school: "2021 British Columbia Alumni"
    },
    {
        comm: "“There’s all this spanish text on my site i'll know it when i see it, nor i need this to work in internet explorer!, are you busy this weekend?”",
         named: "Phoebe Buffay",
         school: "2021 British Columbia Alumni"
    },
     {
        comm: "“There’s all this spanish text on my site i'll know it when i see it, nor i need this to work in internet explorer!, are you busy this weekend?””",
         named: "Joey Tribbiani",
         school: "2020 Vancouver State Alumni"
    }, {
        comm: "“Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”",
         named: "Sarah Ruth",
         school: "2020 Vancouver State Alumni"
    },
     {
        comm: "“There’s all this spanish text on my site i'll know it when i see it, nor i need this to work in internet explorer!, are you busy this weekend?”",
         named: "Kenenna Agbo",
         school: "2021 British Columbia Alumni"
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
    prevArrow: false, // Remove the previous button
    nextArrow: false, // Remove the next button

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
