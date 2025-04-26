import express from 'express';
import Service from '../models/service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { title, description, contact } = req.body;
    const newService = new Service({ title, description, contact });
    await newService.save();
    res.status(201).json(newService);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
