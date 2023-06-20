import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import First from './components/First'
import Final from './components/Final'
import SummaryPage from './components/SummaryPage'
import PersonalDetails from './components/PersonalDetails'
import CustomerIdentification from './components/CustomerIdentification';
import KYC from './components/KYC'
import SecurityQuestions from './components/SecurityQuestions'


function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path="/first" element={<First />} /> 
          <Route  path="/Final" element={<Final />} /> 
          <Route  path="/SummaryPage" element={<SummaryPage/>} /> 
          <Route  path="/PersonalDetails" element={<PersonalDetails/>} /> 
          <Route  path="/CustomerIdentification" element={<CustomerIdentification />} /> 
          <Route  path="/KYC" element={<KYC/>} /> 
          <Route  path="/SecurityQuestions" element={<SecurityQuestions />} /> 
          
        </Routes>    
      </BrowserRouter>
      
    </div>
  );
}

export default App;
