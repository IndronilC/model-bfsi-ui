import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import First from './components/onboard/First';
import PersonalDetails from './components/onboard/PersonalDetails';
import CustomerIdentification from './components/onboard/CustomerIdentification';
import KYC from './components/onboard/KYC';
import SecurityQuestions from './components/onboard/SecurityQuestions';
import SummaryPage from './components/onboard/SummaryPage'
import Final from './components/onboard/Final';
import Sidenav from './shared/sidenav/sidenav';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

function AppRoutes() {
  const location = useLocation();

  // Check if the current route is First or Final
  const hideSidenavFooter =
  location.pathname === '/First' ||
  location.pathname === '/SummaryPage' ||
  location.pathname === '/Final';

  return (
    //validating based on the location the screens will be displayed
    <>

      {!hideSidenavFooter && <Sidenav />}
      <Header />
      <Routes>
        <Route path="/Personaldetails" element={<PersonalDetails />} />
        <Route path="/First" element={<First />} />
        <Route path="/CustomerIdentification" element={<CustomerIdentification />} />
        <Route path="/KYC" element={<KYC />} />
        <Route path="/SecurityQuestions" element={<SecurityQuestions />} />
        <Route path="/SummaryPage" element={<SummaryPage />} />
        <Route path="/Final" element={<Final />} />
      </Routes>
      {!hideSidenavFooter && <Footer />}
    </>
  );
}

export default App;
