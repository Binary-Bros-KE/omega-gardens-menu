import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/hotel/Home';
import OmegaGardensMenu from './pages/menu/OmegaGardensMenu';
import Footer from './components/Footer/Footer';
import Accomodation from './pages/accomodation/Accomodation';


function App() {
  return (
    <Router>
      <Toaster position="top-right" containerClassName='z-99999999' />

      {/* <Navbar /> */}
      <Routes>
        {/* <Route path='/home' element={<Home />}></Route> */}
        {/* <Route path='/accomodations' element={<Accomodation />} /> */}
        <Route path='/' element={<OmegaGardensMenu />} />
      </Routes>

      {/* <Footer /> */}

    </Router>
  );
}

export default App;
