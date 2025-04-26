// src/pages/Publish.jsx
import { useState } from 'react';
import axios from 'axios';

function Publish() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('http://localhost:5000/api/services', {
        title,
        description,
        contact,
      });
      alert('Service publié ✅');
      setTitle('');
      setDescription('');
      setContact('');
    } catch (error) {
      console.error(error);
      alert('Erreur lors de la publication ❌');
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Publier un Service</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 "
          required
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="border p-2"
          required
        />
        <button type="submit" style={{margin : "20px 50px"}} disabled={loading} className="bg-blue-500 text-white p-2">
          {loading ? 'Publication en cours...' : 'Publier'}
        </button>
      </form>
    </div>
  );
}

export default Publish;
