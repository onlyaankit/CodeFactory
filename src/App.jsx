import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import ProjectSection from "./component/ProjectSection";
import ConsultingPage from "./component/Consultingpage";
import Faq from "./component/Faq";
import MilestoneStats from "./component/MilestoneStats";
import FinancialServices from "./component/FinancialServices";
import Advisors from "./component/advisors";
import ConsultationSection from "./component/ConsultationSection";
import Testimonials from "./component/testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <ConsultingPage />
      <Faq />
      <MilestoneStats />
      <FinancialServices></FinancialServices>
      <Advisors></Advisors>
      <ConsultationSection></ConsultationSection>
      <Testimonials></Testimonials>
      
    </>
  );
};

export default App;
