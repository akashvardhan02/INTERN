const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  order: { type: Number, required: true },
  metadata: { type: String, required: true },
});

module.exports = mongoose.model('Video', videoSchema);
