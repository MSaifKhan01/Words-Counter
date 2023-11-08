const mongoose = require('mongoose');

const ipSchema = new mongoose.Schema({
  ipAddress: String,
});

const IPModel = mongoose.model('IP', ipSchema);

module.exports = IPModel;