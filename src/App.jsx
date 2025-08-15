import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/hotel/Home';
import OmegaGardensMenu from './pages/menu/OmegaGardensMenu';
import Footer from './components/Footer/Footer';
import Accomodation from './pages/accomodation/Accomodation';
import ChildrenPage from './pages/children/ChildrenPage';
import OmegaGardensBarMenu from './pages/barMenu/BarMenu';
import BarPage from './pages/barPage/BarPage';
import WeddingPage from './pages/wedding/WeddingPage';
import GymAndSpa from './pages/gymaAndSpa/GymAndSpa';
import BackToTop from './components/BackToTop';
import ContactPage from './pages/contact/ContactPage';


function App() {
  return (
    <Router>
      <Toaster position="top-right" containerClassName='z-99999999' />
      <BackToTop />

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/accomodation' element={<Accomodation />} />
        <Route path='/children-activities' element={<ChildrenPage />} />
        <Route path='/bar' element={<BarPage />} />
        <Route path='/wedding-grounds' element={<WeddingPage />} />
        <Route path='/gym-and-spa' element={<GymAndSpa />} />
        <Route path='/contact' element={<ContactPage />} />

        <Route path='/restaurant-menu/:categoryParam?' element={<OmegaGardensMenu />} />
        <Route path='/bar-menu' element={<OmegaGardensBarMenu />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;
