//individual script to create a new admin user

const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const AdminUser = require('./models/adminUser');
const dotenv = require('dotenv');

dotenv.config();

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const createAdminUser = async () => {
  const username = 'admin';
  const password = 'password';

  try {
    const existingUser = await AdminUser.findOne({ username });
    if (existingUser) {
      console.log('Admin user already exists');
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new AdminUser({
      username,
      password: hashedPassword,
    });

    await newUser.save();
    console.log('Admin user created');
  } catch (error) {
    console.error('Error creating admin user:', error);
  } finally {
    mongoose.disconnect();
  }
};

createAdminUser();
