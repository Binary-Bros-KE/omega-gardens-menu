import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/hotel/Home';
import OmegaGardensMenu from './pages/menu/OmegaGardensMenu';
import Footer from './components/Footer/Footer';
import Accomodation from './pages/accomodation/Accomodation';
import ChildrenPage from './pages/children/ChildrenPage';
import OmegaGardensBarMenu from './pages/barMenu/BarMenu';


function App() {
  return (
    <Router>
      <Toaster position="top-right" containerClassName='z-99999999' />

      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/accomodation' element={<Accomodation />} />
        <Route path='/restaurant-menu' element={<OmegaGardensMenu />} />
        <Route path='/bar-menu' element={<OmegaGardensBarMenu />} />
        <Route path='/children-activities' element={<ChildrenPage />} />
      </Routes>

      {/* <Footer /> */}

    </Router>
  );
}

export default App;
