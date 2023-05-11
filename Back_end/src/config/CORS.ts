import cors from 'cors';
const allowedOrigins = ['https://cse-project-react-v9.onrender.com', 'https://cse-project-react-v8.onrender.com'];

const options: cors.CorsOptions = {
  origin: allowedOrigins,
};

export default options;
