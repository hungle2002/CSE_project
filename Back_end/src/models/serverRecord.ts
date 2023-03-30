import mongoose from 'mongoose';

const serverRecordSchema = new mongoose.Schema({
  SRID: {
    type: String,
    unique: [true, "ServerRecord: Server record's ID must be unique!"],
    required: [true, "ServerRecord: Server record's ID required!"],
  },
  time: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('ServerRecord', serverRecordSchema);
