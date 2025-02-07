const express = require('express');
const mongoose = require('mongoose');
const Project = require('./projectModel');
const Mockup = require('./mockupmodule');
const Review = require('./reviews');
const next = require('next');
const path = require('path');
const cors = require('cors');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: path.join(__dirname, '../client') }); // Load Next.js from client directory
const handle = nextApp.getRequestHandler();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb+srv://itsnishant470:rXjIlUsnqg8kjFbm@cluster0.amgic.mongodb.net/'
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

connectDB();

nextApp.prepare().then(() => {
  // API Routes
  app.get('/data', async (req, res) => {
    try {
      const projects = await Project.find();
      return res.json({ projects });
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

  app.get('/mockup', async (req, res) => {
    try {
      const mockups = await Mockup.find();
      return res.json({ mockups });
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

  app.get('/reviews', async (req, res) => {
    try {
      const reviews = await Review.find();
      return res.json({ reviews });
    } catch (err) {
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.post('/reviews', async (req, res) => {
    const { name, description } = req.body;
    try {
      if (!name || !description) {
        return res.status(400).json({ error: 'Name and description are required' });
      }
      const newReview = new Review({ name, description });
      await newReview.save();
      res.status(201).json(newReview);
    } catch (err) {
      console.error('Error saving review:', err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  app.post('/data', async (req, res) => {
    const { title, description, imageUrl } = req.body;
    try {
      const newProject = new Project({ title, description, imageUrl });
      await newProject.save();
      res.status(201).json(newProject);
    } catch (err) {
      res.status(500).send('Server error');
    }
  });

  // Serve all Next.js pages and static files
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
