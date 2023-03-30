import mongoose from 'mongoose';

const deviceRecordSchema = new mongoose.Schema({
  SRID: {
    // references server record's SRID
    type: String,
    required: [true, "DeviceRecordSchema: Device record's ID required!"],
  },
  typ: {
    type: String,
    required: [true, "Device record's type required!"],
    enum: {
      values: ['temperature', 'lighting', 'soilMoisture'],
      message: 'Type can only be temperature, lighting or soilMoisture!',
    },
  },
  value: {
    type: Number,
    required: [true, 'DeviceRecordSchema: The value of this device record required!'],
  },

  // value
});

export default mongoose.model('DeviceRecord', deviceRecordSchema);
