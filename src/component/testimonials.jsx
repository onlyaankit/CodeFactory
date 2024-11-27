// src/Testimonials.js

import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    text: "Quick, professional, and creative—Zynto delivered exactly what we needed.",
    name: "Oliver Brown",
    location: "Manchester, UK",
    image: "path/to/image1.jpg" // Replace with actual image path
  },
  {
    id: 2,
    text: "Quick, professional, and creative—Zynto delivered exactly what we needed.",
    name: "Oliver Brown",
    location: "Manchester, UK",
    image: "path/to/image2.jpg" // Replace with actual image path
  },
  {
    id: 3,
    text: "Quick, professional, and creative—Zynto delivered exactly what we needed.",
    name: "Oliver Brown",
    location: "Manchester, UK",
    image: "path/to/image3.jpg" // Replace with actual image path
  },
  {
    id: 4,
    text: "Quick, professional, and creative—Zynto delivered exactly what we needed.",
    name: "Oliver Brown",
    location: "Manchester, UK",
    image: "path/to/image4.jpg" // Replace with actual image path
  },
  {
    id: 5,
    text: "Quick, professional, and creative—Zynto delivered exactly what we needed.",
    name: "Oliver Brown",
    location: "Manchester, UK",
    image: "path/to/image4.jpg" // Replace with actual image path
  },
  {
    id: 6,
    text: "Quick, professional, and creative—Zynto delivered exactly what we needed.",
    name: "Oliver Brown",
    location: "Manchester, UK",
    image: "path/to/image4.jpg" // Replace with actual image path
  },
  {
    id: 7,
    text: "Quick, professional, and creative—Zynto delivered exactly what we needed.",
    name: "Oliver Brown",
    location: "Manchester, UK",
    image: "path/to/image4.jpg" // Replace with actual image path
  },
  {
    id: 8,
    text: "Quick, professional, and creative—Zynto delivered exactly what we needed.",
    name: "Oliver Brown",
    location: "MainPuri, UP",
    image: "path/to/image4.jpg" // Replace with actual image path
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="testimonial-card">
    <div className="stars">★★★★★</div>
    <p className="testimonial-text">{testimonial.text}</p>
    <div className="testimonial-author">
      <img src={testimonial.image} alt={testimonial.name} className="author-image" />
      <div>
        <p className="author-name">{testimonial.name}</p>
        <p className="author-location">{testimonial.location}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="testimonials-section">
    <h2>What Our Clients Are Saying</h2>
    <p>Meet our expert advisory panel dedicated to delivering tailored strategic insights and innovative solutions for your challenges.</p>
    <div className="testimonials-container">
      {testimonials.map(testimonial => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default Testimonials;
