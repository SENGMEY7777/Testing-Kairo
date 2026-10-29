import express from 'express';
import authRoutes from './routes/authRoutes.js';

const app = express();

// Global Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use('/api/auth', authRoutes);

// Health Check Route
app.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Promt Auth API is running successfully.'
  });
});



app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});

export default app;
