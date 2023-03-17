const express = require("express");
const router = express.Router();
const {
  getOneCondition,
  getAllCondition,
  getAllConditionValue,
  getOneConditionValue,
} = require("../controllers/condition");

router.route("/value").get(getAllConditionValue);
router.route("/:id/value").get(getOneConditionValue);
router.route("/").get(getAllCondition);
router.route("/:id").get(getOneCondition);

module.exports = router;
