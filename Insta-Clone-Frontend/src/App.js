import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Landing_page from './LandingPage/landing_page';
import UploadPage from './UploadPage/UploadPage'
import App1 from './App1';
function App() {
  return (
    <div className="wrapper">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing_page />} />
          <Route path="/InstaClone" element={<App1 />} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;