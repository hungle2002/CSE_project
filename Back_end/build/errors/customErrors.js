"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomeError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.default = CustomeError;
