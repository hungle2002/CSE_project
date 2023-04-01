import {Server} from 'socket.io';
import http from 'http';

class Socket {
  private io: Server | null = null;

  // implement singleton pattern
  private static instance: Socket;

  private constructor() {}
  public static getConditionRepository(): Socket {
    if (!Socket.instance) {
      return new Socket();
    }
    return Socket.instance;
  }

  public init(server: http.Server) {
    console.log('Init Socket with Express server');
    this.io = new Server(server, {
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

  public test() {
    console.log('Socket testing!');
    if (this.io) {
      this.io.emit('update_something', 'Le Quoc Hung');
    } else {
      console.log('No socket create!!');
    }
  }
}
export default Socket.getConditionRepository();
