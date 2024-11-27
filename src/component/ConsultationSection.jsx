
import './ConsultationSection.css';

const ConsultationSection = () => {
  return (
    <div className="consultation-section">
      <h1>Schedule Your Free Consultation Today</h1>
      <p>Meet our expert advisory panel dedicated to delivering tailored strategic insights and innovative solutions for your challenges.</p>
      <div className="input-container">
        <input type="email" placeholder="Email address..." />
        <button>Get in Touch</button>
      </div>
    </div>
  );
};

export default ConsultationSection;
