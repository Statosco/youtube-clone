import React, { useState } from 'react';
import '/src/Pages/Home/Home.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Video from './Pages/Video/Video.jsx';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      {/* Pass both setSidebar and sidebar as props to Navbar */}
      <Navbar setSidebar={setSidebar} sidebar={sidebar} />
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  );
}

export default App;
