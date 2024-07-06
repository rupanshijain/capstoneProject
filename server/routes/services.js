const express = require('express');
const router = express.Router();
let Service = require('../models/services');

router.get('/', async (req, res) => {
  try {
    const services = await Service.find();
    res.json(services);
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

router.post('/add', async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;

  const newService = new Service({
    title,
    description,
  });

  try {
    await newService.save();
    res.json('Service added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
