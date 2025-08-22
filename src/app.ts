import express from 'express';
import path from 'path';
import { logger } from './middleware/logger';
import index from './routes/index';
import { errorHandler } from './middleware/error';

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'static')));

app.use(logger);

app.use('/', index);

app.use(errorHandler);

// separate requests
console.log('');

export default app;
