

const ProjectSection = () => {
  const logos = [
    { src: "https://via.placeholder.com/100x50", alt: "Vitec" },
    { src: "https://via.placeholder.com/100x50", alt: "Exit" },
    { src: "https://via.placeholder.com/100x50", alt: "JD Group" },
    { src: "https://via.placeholder.com/100x50", alt: "Enel Distribuzione" },
    { src: "https://via.placeholder.com/100x50", alt: "Company C" },
    { src: "https://via.placeholder.com/100x50", alt: "Enel" },
    { src: "https://via.placeholder.com/100x50", alt: "PTT" },
  ];

  return (
    <div className="bg-gradient-to-b from-[#1a1a2e] to-[#282a36] py-12 text-center">
      {/* Title */}
      <h2 className="text-xl md:text-3xl font-semibold text-white mb-6">
        Over <span className="text-purple-500 font-bold">1,000</span> Projects
        Successfully Completed
      </h2>

      {/* Logo Grid */}
      <div className="flex flex-wrap justify-center items-center gap-6">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-[#1e2233] p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
