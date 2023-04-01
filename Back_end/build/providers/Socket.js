"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
class Socket {
    constructor() {
        this.io = null;
    }
    static getConditionRepository() {
        if (!Socket.instance) {
            return new Socket();
        }
        return Socket.instance;
    }
    init(server) {
        console.log('Init Socket with Express server');
        this.io = new socket_io_1.Server(server, {
            cors: {
                origin: 'http://localhost:3001',
                methods: ['GET', 'POST', 'PATCH', 'DELETE'],
            },
        });
        this.io.on('connection', (socket) => {
            console.log('Socket catch new connection');
            socket.on('disconnect', () => {
                console.log('User disconnected');
            });
        });
    }
    test() {
        console.log('Socket testing!');
        if (this.io) {
            this.io.emit('update_something', 'Le Quoc Hung');
        }
        else {
            console.log('No socket create!!');
        }
    }
}
exports.default = Socket.getConditionRepository();
