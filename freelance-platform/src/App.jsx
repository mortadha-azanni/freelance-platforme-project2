import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Publish from './pages/Publish';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="p-4">
        <Navbar />        
        <h1 className="text-3xl font-bold mb-6">Mini Plateforme Freelance 🚀</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
