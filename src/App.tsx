import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import First from './components/onboard/First';
import PersonalDetails from './components/onboard/PersonalDetails';
import CustomerIdentification from './components/onboard/CustomerIdentification';
import KYC from './components/onboard/KYC';
import SecurityQuestions from './components/onboard/SecurityQuestions';
import SummaryPage from './components/SummaryPage'
import Final from './components/Final';
import Sidenav from './shared/sidenav/sidenav';
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
function App() {
  return (
    <div className="App">
      
        <BrowserRouter>
        <Sidenav />
        <Header/>
        <Footer />
        <Routes>
          <Route  path="/Personaldetails" element={<PersonalDetails/>} /> 
          <Route  path="/First" element={<First/>} /> 
          <Route  path="/CustomerIdentification" element={<CustomerIdentification/>} /> 
          <Route  path="/KYC" element={<KYC/>} />  
          <Route  path="/SecurityQuestions" element={<SecurityQuestions/>} />  
          <Route  path="/SummaryPage" element={<SummaryPage/>} /> 
          <Route  path="/Final" element={<Final/>} />  
         
        </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
