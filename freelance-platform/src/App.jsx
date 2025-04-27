import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Publish from './pages/Publish';
import Navbar from './components/Navbar';
import Waves from './components/Waves/Waves';
import DecryptedText from './components/DecryptedText/DecryptedText';
  
function App() {
  return (
    
    <BrowserRouter>
      <div className="p-4">
        <Waves style={{zIndex: '-1',position: "fixed"}} />
        <div style={{
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '20px',
          borderRadius: '0 0 20px 20px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          paddingBottom: '50px',
        }}>
        <DecryptedText text="Mini Plateforme Freelance 🚀" speed={100} style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          color: '#fff',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
          fontFamily: 'Courier New, Courier, monospace',
          textTransform: 'uppercase',
          letterSpacing: '2px',
        }}/>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publish" element={<Publish />} />
        </Routes>
        <Navbar />        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
