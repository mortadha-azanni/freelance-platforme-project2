import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import './home_style.css';
import ServiceCard from '../components/Card';

function Home() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/services');
        setServices(res.data);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchServices();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4" style={{
        textAlign: 'center',
        marginTop: '20px',
        fontFamily: 'Courier New, Courier, monospace',
        color: '#333',
        fontSize: '2rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to right, #6a11cb, #2575fc)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        marginBottom: '20px',
        textDecoration: 'underline',
        textDecorationColor: '#6a11cb',
        textDecorationThickness: '2px',
      }}>Services disponibles</h2>
      <div className="container-Pub">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Home;

