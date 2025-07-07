const express = require('express');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./configs/swagger');
require('dotenv').config();

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoute');
const noteRoutes = require('./routes/notesRoutes');

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/notes', noteRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
