"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const badRequest_1 = __importDefault(require("./badRequest"));
const notFound_1 = __importDefault(require("./notFound"));
const unauthorizied_1 = __importDefault(require("./unauthorizied"));
const customErrors_1 = __importDefault(require("./customErrors"));
const Errors = {
    BadRequestError: badRequest_1.default,
    NotFoundError: notFound_1.default,
    UnauthorizedError: unauthorizied_1.default,
    CustomeError: customErrors_1.default,
};
exports.default = Errors;
