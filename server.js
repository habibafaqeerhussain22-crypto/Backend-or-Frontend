const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const sequelize = require('./config/db');

// Import Routes
const cropRoutes = require('./routes/cropRoutes');
const workerRoutes = require('./routes/workerRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const expenseRoutes = require('./routes/expenseRoutes');
const taskRoutes = require('./routes/taskRoutes');
const buyerRoutes = require('./routes/buyerRoutes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// API Endpoints Mounting
app.use('/api/crops', cropRoutes);
app.use('/api/workers', workerRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/expenses', expenseRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/buyers', buyerRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('Backend Server is Running Successfully!');
});

const PORT = process.env.PORT_NAME || 5000;

// Database Sync & Server Start
sequelize.sync()
  .then(() => {
    console.log('Database synced successfully with all 7 models.');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to sync database:', err);
  });