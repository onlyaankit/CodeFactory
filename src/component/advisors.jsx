
import './Advisors.css';

const advisors = [
  {
    name: 'Benjamin Brooks',
    image: 'path/to/benjamin-image.jpg',
    social: {
      facebook: 'https://facebook.com/benjamin',
      twitter: 'https://twitter.com/benjamin',
      linkedin: 'https://linkedin.com/in/benjamin'
    }
  },
  {
    name: 'Emily Thompson',
    image: 'path/to/emily-image.jpg',
    social: {
      facebook: 'https://facebook.com/emily',
      twitter: 'https://twitter.com/emily',
      linkedin: 'https://linkedin.com/in/emily'
    }
  },
  {
    name: 'Olivia Foster',
    image: 'path/to/olivia-image.jpg',
    social: {
      facebook: 'https://facebook.com/olivia',
      twitter: 'https://twitter.com/olivia',
      linkedin: 'https://linkedin.com/in/olivia'
    }
  },
  {
    name: 'Jessica Wong',
    image: 'path/to/jessica-image.jpg',
    social: {
      facebook: 'https://facebook.com/jessica',
      twitter: 'https://twitter.com/jessica',
      linkedin: 'https://linkedin.com/in/jessica'
    }
  }
];

const Advisors = () => {
  return (
    <div className="advisors-section">
      <h2>Our Knowledgeable Advisors</h2>
      <p>Meet our expert advisory panel dedicated to delivering tailored strategic insights and innovative solutions for your challenges.</p>
      <div className="advisors-grid">
        {advisors.map((advisor, index) => (
          <div key={index} className="advisor-card">
            <img src={advisor.image} alt={advisor.name} className="advisor-image" />
            <h3>{advisor.name}</h3>
            <div className="social-icons">
              <a href={advisor.social.facebook} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href={advisor.social.twitter} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href={advisor.social.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button className="team-button">Our Team</button>
    </div>
  );
};

export default Advisors;
