const mongoose = require("mongoose");

const activityLogSchema = new mongoose.Schema({
  LID: {
    type: String,
    required: [true, "ActivityLogSchema: Activity log's ID required!"],
    unique: [true, "ActivityLogSchema: Activity log's must be unique!"]
  },
  typ: {
    type: String,
    required: [true, "ActivityLogSchema: Activity log's type required!"],
    enum: {
      values: ["warning", "reminder", "systemInfo"],
      message: "Type can only be warning, reminder or systemInfo!"
    }
  },
  time: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    maxLength: [50, "ActivityLogSchema: Activity log's description too lengthy!"]
  },
  SRID: {           // references server record's SRID
    type: String,
    required: [true, "ActivityLogSchema: Server record's type required!"]
  }
});

module.exports = mongoose.model("ActivityLog", activityLogSchema);
