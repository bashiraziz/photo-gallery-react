import React from 'react';
import Title from './comps/Title'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Accounting from './comps/Accounting';
import Navbar from './comps/navbar/Navbar';
import Pictures from './comps/pictures/Pictures';
import HomePagePic from './comps/homePagePic/HomePagePic';
//import UploadForm from './comps/UploadForm';

function App() {
  
  return (
    <>
    
    <Router>
      
      <div className="container">
        <Navbar />  
      
      <Routes>
        <Route path="/" element={<Title />} /> 
        <Route path="/accounting" element={<Accounting />} />
        <Route path="/pictures" element={<Pictures />} />
        
      </Routes>
        </div>
    </Router>
      
    <div className="App">
      
      {/* <UploadForm/> */}
      
    </div>
    <div>
      <p> A total amount of $xxxxxx was donated. May Allah reward abunduntly all the donors 
          and all those who worked to make it a successul operation. 
          Ration was distributed at 30 locations and xxxxx beneficeries were served.
      </p>
    </div>
    <div className='homepic'>
    <HomePagePic />
    </div>
    </>
  );
}

export default App;
