import { useState } from 'react';
import axios from 'axios';
import './publish_style.css'; 

function Publish() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage('');
    setErrorMessage('');
    try {
      await axios.post('http://localhost:5000/api/services', {
        title,
        description,
        contact,
      });
      setSuccessMessage('✅ Service publié avec succès !');
      setTitle('');
      setDescription('');
      setContact('');
    } catch (error) {
      console.error(error);
      setErrorMessage('❌ Erreur lors de la publication.');
    }
    setLoading(false);
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="form">
        <h2 className="title">Publier un Service</h2>
        <p className="message">Publish now and get some work!</p>

        {successMessage && <p className="success">{successMessage}</p>}
        {errorMessage && <p className="error">{errorMessage}</p>}

        <input
          type="text"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />
        <input
          type="text"
          placeholder="Contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          className="input"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="description"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="submit"
        >
          {loading ? 'Publication en cours...' : 'Publier'}
        </button>
      </form>
    </div>
  );
}

export default Publish;
