const mongoose = require("mongoose");

const deviceRecordSchema = new mongoose.Schema({
  SRID: {           // references server record's SRID
    type: String,
    required: [true, "DeviceRecordSchema: Device record's ID required!"]
  },
  typ: {
    type: Number,   // [1, 2, 3] => [temperature, lighting, soil moisture]
    required: [true, "DeviceRecordSchema: Device record's type required!"]
  }
});

module.exports = mongoose.model("DeviceRecord", deviceRecordSchema);
