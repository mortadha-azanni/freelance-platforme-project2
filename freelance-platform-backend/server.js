import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import serviceRoutes from './routes/serviceRoutes.js'; // ← ici !

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use('/api/services', serviceRoutes);

const mongoURI = "mongodb+srv://admin:MAinfo@freelanceplatform.0kwgh7t.mongodb.net/?retryWrites=true&w=majority&appName=FreelancePlatform";

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Atlas connecté !"))
.catch((error) => console.error("❌ Erreur MongoDB:", error));

app.get('/', (req, res) => {
  res.send('Serveur Express fonctionne et connecté à MongoDB !');
});

app.listen(port, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
});
