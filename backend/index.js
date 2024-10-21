import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import session from 'express-session';

const app = express();
const port = 5000;

// Enable CORS
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, // Allow credentials
}));

app.use(session({
    secret: 'your_secret_key', // Change this to a secure key in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
}));

// Parse JSON requests
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
