const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: String,
  weight: Number,
  description: String,
  projectId: String,  // reference to the project
});

module.exports = mongoose.model('Task', taskSchema);
