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
    update_device_state(device_key, value) {
        const notification = {
            title: 'UPDATE device state',
            message: `Change state of device ${device_key} to ${value} `,
        };
        if (this.io) {
            this.io.emit(`update_device_${device_key}`, value);
            this.io.emit('notification', notification);
        }
        else {
            console.log('No socket create!!');
        }
    }
    create_device(device_typ, device_des) {
        const notification = {
            title: 'ADD new device',
            message: `Add new ${device_typ} device : ${device_des} successfully !`,
        };
        if (this.io) {
            // this.io.emit(`update_device_${device_key}`, value);
            this.io.emit('notification', notification);
        }
        else {
            console.log('No socket create!!');
        }
    }
    update_condition(value) {
        const notification = {
            title: 'UPDATE condition',
            message: `Update latest condition at ${new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' })} `,
        };
        if (this.io) {
            this.io.emit('update_condition', value);
            this.io.emit('notification', notification);
        }
        else {
            console.log('No socket create!!');
        }
    }
    update_settings(type) {
        const notification = {
            title: 'UPDATE settings',
            message: `${type === "soilMoisture" ? "SOIL MOISTURE" : type.toUpperCase()} settings updated successfully!`,
        };
        if (this.io) {
            this.io.emit('notification', notification);
        }
        else {
            console.log('No socket create!!');
        }
    }
}
exports.default = Socket.getConditionRepository();
