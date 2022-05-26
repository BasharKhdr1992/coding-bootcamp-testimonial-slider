import React, { useState } from 'react';
import john from '../images/image-john.jpg';
import tanya from '../images/image-tanya.jpg';
import './Slider.css';
import Button from './Button';

const testimonials = [
  {
    name: 'Tanya Sinclair',
    jobTitle: 'UX Engineer',
    testimonial: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
    image: tanya,
  },
  {
    name: 'John Tarkpor',
    jobTitle: 'Junior Front-end Developer',
    testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer. ”`,
    image: john,
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const testimonial = testimonials[index];

  const onPrevious = () => {
    setIndex((prev) => {
      if (prev === 0) {
        return testimonials.length - 1;
      } else {
        return prev - 1;
      }
    });
  };

  const onNext = () => {
    setIndex((prev) => {
      if (prev === testimonials.length - 1) {
        return 0;
      } else {
        return prev + 1;
      }
    });
  };

  return (
    <div className="slider">
      <div className="testimonial-container">
        <p className="testimonial">{testimonial.testimonial}</p>
        <div className="user-info">
          <p className="user-name">{testimonial.name}</p>
          <p className="job-title">{testimonial.jobTitle}</p>
        </div>
      </div>
      <div className="slider-img-container">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          title={testimonial.jobTitle}
        />
        <div className="btn-list">
          <Button onClick={onPrevious}>{`<`}</Button>
          <Button onClick={onNext}>{`>`}</Button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
