const mongoose = require('mongoose');

const deviceSchema = mongoose.Schema({
  device_id: { type: String, required: true },
  voltage: { type: String, required: true },
  timestamp: { type: String, required: true },
  current: { type: String, required: true },
})

module.exports = mongoose.model("DeviceData", deviceSchema);