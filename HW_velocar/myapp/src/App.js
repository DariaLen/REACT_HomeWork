import './App.css';
import DescriptionWrapper from './components/Description/DescriptionWrapper';
import HeaderWrapper from './components/Header/HeaderWrapper';
import RentalSectionWrapper from './components/RentalSection/RentalSectionWrapper';
import ServiceSectionWrapper from './components/ServicesSection/ServiceSectionWrapper';
import SloganSectionWrapper from './components/SloganSection/SloganSectionWrapper';

function App() {
  return (
    <div>
      <HeaderWrapper/>
      <DescriptionWrapper/>
      <SloganSectionWrapper/>
      <ServiceSectionWrapper/>
      <RentalSectionWrapper/>
    </div>
  );
}

export default App;
