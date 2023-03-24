const ServerRecord = require("../models/serverRecord")
// for initial testing purposes only; delete this comment when in implementation
const getAllServerRecords = async (req, res) => {
  try {
    const records = await ServerRecord.find()
    if (records.length === 0) return res.status(200).json({message: "Empty"})
    return res.status(200).json(records)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error at " + req.originalUrl})
  }
}

const addServerRecord = async (req, res) => {
  try {
    const newRecord = req.body;
    console.log("newRecord: ", newRecord)
    await ServerRecord.create(newRecord)
    return res.status(200).json(newRecord)
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({message: "Error at " + req.originalUrl})
  }
}

module.exports = { getAllServerRecords, addServerRecord }