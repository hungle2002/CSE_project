"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const connect_1 = __importDefault(require("./db/connect"));
const routes_1 = __importDefault(require("./routes"));
const middlewares_1 = __importDefault(require("./middlewares"));
const http_1 = __importDefault(require("http"));
const Socket_1 = __importDefault(require("./providers/Socket"));
const CORS_1 = __importDefault(require("./config/CORS"));
const ServerRecordService_1 = require("./services/ServerRecordService");
dotenv_1.default.config();
const app = (0, express_1.default)();
const server = http_1.default.createServer(app);
// app mounting
app.use((0, cors_1.default)(CORS_1.default));
app.use(express_1.default.json());
// init socket
Socket_1.default.init(server);
//routing
app.use('/api/v1/condition/', routes_1.default.conditionRoute);
app.use('/api/v1/device/', routes_1.default.deviceRoute);
// using middlewares
app.use(middlewares_1.default.notFoundMiddleware);
app.use(middlewares_1.default.errorHandleMiddleware);
// server
const port = 3000;
const connectDB = async () => {
    try {
        await (0, connect_1.default)(process.env.MONGO_URI);
        server.listen(port, () => {
            console.log('Server listen on port ' + port + '...');
        });
        (0, ServerRecordService_1.autoCreateServerRecord)();
    }
    catch (error) {
        console.log(error);
    }
};
connectDB();
