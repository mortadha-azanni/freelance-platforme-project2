import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  contact: { type: String, required: true },
}, { timestamps: true });

const Service = mongoose.model('Service', serviceSchema);

export default Service;
