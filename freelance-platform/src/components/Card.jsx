import React from 'react';
import SpotlightCard from './SpotlightCard/SpotlightCard';

const ServiceCard = ({ service }) => {
  const handleContactClick = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(service.contact)}`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div className="">
      <SpotlightCard className="w-[400px] h-[500px] rounded-2xl p-6 bg-gradient-to-br from-white to-gray-200 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <div className="flex flex-col justify-between h-full">
          <div className="space-y-4 text-white" style={{ color: "whitesmoke" }}>
            <h2 className="text-3xl font-bold">{service.title}</h2>
            <p className="text-base">{service.description}</p>
            <div className="text-sm space-y-1">
              <p><span className="font-semibold">Email:</span> {service.contact}</p>
              <p><span className="font-semibold">Category:</span> {service.category}</p>
            </div>
          </div>
          <button
            onClick={handleContactClick}
            className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 w-full font-bold "
            style={{ position: 'absolute', left: 0, right: 0 ,bottom: 20, margin: '0 auto', width: '80%', textAlign: 'center', fontSize: '1.2rem' }}
          >
            Contact
          </button>
        </div>
      </SpotlightCard>
    </div>
  );
};

export default ServiceCard;
