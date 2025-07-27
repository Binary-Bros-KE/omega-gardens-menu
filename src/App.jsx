import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';
import OmegaGardensMenu from './pages/hotel/components/OmegaGardensMenu';


function App() {
  return (
      <Router>
        <Toaster position="top-right" containerClassName='z-99999999'/>

        <Routes>
          <Route path='/' element={<OmegaGardensMenu />} />
        </Routes>

      </Router>
  );
}

export default App;
