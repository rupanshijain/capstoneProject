// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
const servicesRouter = require('./routes/services');
const loginRouter = require('./routes/login');
const adminUserRouter = require('./routes/user');
const contactRouter = require('./routes/contact');

app.use('/services', servicesRouter);
app.use('/login', loginRouter);
app.use('/user', adminUserRouter);
app.use('/contact', contactRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
