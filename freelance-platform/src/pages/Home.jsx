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
      <h2 className="text-2xl font-bold mb-4">Services disponibles</h2>
      <div className="container-Pub">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
}

export default Home;

