import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connect from './db/connect';
import route from './routes';
import middlewares from './middlewares';

dotenv.config();
const app = express();

// app mounting
app.use(cors());
app.use(express.json());

//routing
app.use('/api/v1/condition/', route.conditionRoute);
app.use('/api/v1/device/', route.deviceRoute);

// using middlewares
app.use(middlewares.notFoundMiddleware);
app.use(middlewares.errorHandleMiddleware);

// server
const port = process.env.PORT || 3000;

const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log('Server listen on port ' + port + '...');
    });
  } catch (error) {
    console.log(error);
  }
};
connectDB();
