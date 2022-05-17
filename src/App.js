import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accounting from './comps/Accounting';
import Navbar from './comps/navbar/Navbar';
import Pictures from './comps/pictures/Pictures';
import Receipts from './comps/receipts/Receipts';
import Home from './comps/Home';
import LocationsDataTable from './comps/LocationsDataTable';
import Donations from './comps/Donations';
//import UploadForm from './comps/UploadForm';

function App() {
  
  return (
    <>
    
    <Router>
      
      <div className="container">
      <Navbar />  
        <Routes>
          <Route path="accounting" element={<Accounting />} />
          <Route path="pictures" element={<Pictures />} />
          <Route path="receipts" element={<Receipts />} />
          <Route path="/home" element={<Home />} /> 
          <Route path="/" element={<Home /> } />
          <Route path="/locations" element={<LocationsDataTable />} />
          <Route path="/donations" element={<Donations />} />
        </Routes>
      </div>
    </Router>
      
    <div className="App">
      {/* <UploadForm/>   */}
    </div>
    
    </>
  );
}

export default App;
