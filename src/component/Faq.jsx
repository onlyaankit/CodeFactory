// Import necessary libraries

import "./Faq.css"

function Faq() {
  return (
    <div className="services-page">
      <div className="services-header">
        <p className="services-subtitle">Our Services</p>
        <h1>Tailored Business Solutions for Your Needs</h1>
        <p>Elevate your financial strategy to new heights</p>
      </div>

      <div className="services-content">
        <div className="services-list">
          {[
            "Tax Planning",
            "Inventory Control",
            "Wealth Advisory",
            "Compliance Management",
            "Process Development",
            "Project Management",
          ].map((service, index) => (
            <div className="service-item" key={index}>
              <p>{service}</p>
              <span className="arrow">→</span>
            </div>
          ))}
        </div>

        <div className="services-image">
          {/* Placeholder for the image/icon */}
          <img src="path/to/image.png" alt="Financial Strategy Icon" />
        </div>
      </div>
    </div>
  );
}

export default Faq;
