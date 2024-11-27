import "./FinancialServices.css";

const FinancialServices = () => {
  const services = [
    {
      title: "Investment Approaches",
      description:
        "Access top-tier investment strategies designed by financial experts to help grow.",
    },
    {
      title: "Financial Assessment",
      description:
        "Access top-tier investment strategies designed by financial experts to help grow.",
    },
    {
      title: "Revenue Growth",
      description:
        "Access top-tier investment strategies designed by financial experts to help grow.",
    },
    {
      title: "Clear Fee Structure",
      description:
        "Access top-tier investment strategies designed by financial experts to help grow.",
    },
  ];

  const chartData = [
    { month: "January", percentage: 25 },
    { month: "February", percentage: 76 },
    { month: "March", percentage: 39 },
    { month: "April", percentage: 52 },
  ];

  return (
    <div className="financial-services">
      <h1>How Our Services Help You Achieve More</h1>
      <h2>Elevate your financial strategy to new heights.</h2>
      <div className="content">
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
        <div className="chart">
          <h3>Monthly Performance</h3>
          <ul>
            {chartData.map((data, index) => (
              <li key={index}>
                {data.month}: {data.percentage}%
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FinancialServices;
