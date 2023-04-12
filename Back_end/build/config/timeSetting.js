"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deviceStateReset = exports.activityLogReset = exports.conditionReset = void 0;
// time for temperature, light, soil moisture : 10s
exports.conditionReset = 10000;
// time for smoke and fire : 3s
exports.activityLogReset = 3000;
// time for device state : 20s
exports.deviceStateReset = 25000;
