const mongoose = require("mongoose");

const consumptionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now // ??
  },
  amount: {
    type: Number,
    required: [true, "ConsumptionSchema: Consumption amount required!"]
  },
  deviceID: {       // references device's ID
    type: String,
    required: [true, "ConsumptionSchema: Device consumption's ID required!"]
  }
});

module.exports = mongoose.model("Consumption", consumptionSchema);
