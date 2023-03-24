const express = require("express");
const router = express.Router();
const {
  getAllServerRecords,
  addServerRecord
} = require("../controllers/serverRecord");
// for initial testing purposes only; delete this line when in implementation
router.route("/").get(getAllServerRecords);
router.route("/add").post(addServerRecord);

module.exports = router;
