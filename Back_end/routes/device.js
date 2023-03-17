const express = require("express");
const router = express.Router();
const {
  getAllDevice,
  getDevice,
  getDeviceState,
  createDeviceState,
  getAllDeviceState
} = require("../controllers/device");
router.route("/").get(getAllDevice);
router.route("/state").get(getAllDeviceState);
router.route("/:id").get(getDevice);
router.route("/:id/state").get(getDeviceState).post(createDeviceState);

module.exports = router;
