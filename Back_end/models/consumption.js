const mongoose = require("mongoose");

const consumptionSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: [true, "ConsumptionSchema: Consumption data's date required!"]
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
