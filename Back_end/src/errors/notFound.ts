import CustomeError from './customErrors';
import status from 'http-status';

class NotFoundError extends CustomeError {
  private statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = status.NOT_FOUND;
  }
}

export default NotFoundError;
