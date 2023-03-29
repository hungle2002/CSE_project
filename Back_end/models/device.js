const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  ID: {
    type: String,
    required: [true, "DeviceSchema: Device's ID required!"],
    unique: true,
  },
  typ: {
    type: String,
    required: [true, "DeviceSchema: Device's type required!"],
    enum: {
      values: [
        "lightSensor",
        "humiSensor",
        "tempSensor",
        "soilSensor",
        "waterMotor",
        "lightMotor",
        "smokeSensor",
        "lcdMotor",
      ],
      message:
        "Type can only be lightSensor, humiSensor, tempSensor, soilSensor, waterMotor, lightMotor, smokeSensor, lcdMotor!",
    },
  },
  state: {
    type: Boolean, // false -> off
    default: false,
  },
  price: {
    type: Number,
    required: [true, "DeviceSchema: Device's price required!"],
  },
  location: {
    type: String,
    required: [true, "DeviceSchema: Device's location required!"],
    enum: {
      values: ["HCMUT1", "HCMUT2", "Zone A", "Zone B"],
      maessage: "Location can only be HCMUT1, HCMUT2, Zone A or Zone B!",
    },
  },
  usingTime: {
    type: Number, // in minutes
    required: [true, "DeviceSchema: Device's usage time required!"],
  },
  startOn: {
    type: Date,
    default: Date.now,
  },
  lastChecked: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Device", deviceSchema);
