import "./ConsultingPage.css";

function ConsultingPage() {
  return (
    <div className="consulting-page">
      <div className="consulting-section">
        <h2 className="section-title">Fueling Business Growth</h2>
        <h3>Over 100 Companies Transformed</h3>
        <p>
          Achieve genuine commercial success, as over 100 businesses have
          experienced transformation through our expert strategic consulting
          services.
        </p>
      </div>

      <div className="consulting-section">
        <img
          src="path/to/image1.jpg"
          alt="Consulting Meeting"
          className="consulting-image"
        />
        <h2 className="section-title">Accelerating Revenue Growth</h2>
        <h3>Guiding Firms to Surpass $50M in Revenue</h3>
        <p>
          Exceed industry benchmarks with our expert guidance, propelling your
          business to not only reach but surpass significant milestones.
        </p>
      </div>

      <div className="consulting-section">
        <img
          src="path/to/image2.jpg"
          alt="Budget Strategy"
          className="consulting-image"
        />
        <h2 className="section-title">Targeted Budget Strategy</h2>
        <h3>Budgeting for Projects Exceeding $10 Million</h3>
        <p>
          Discover how our consulting services specialize in optimizing
          operational efficiency through tailored budgetary solutions designed
          specifically for your needs.
        </p>
      </div>
    </div>
  );
}

export default ConsultingPage;
