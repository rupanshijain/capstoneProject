const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.post('/form', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Review added'});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/formData', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.patch('/:id/flag', async (req, res) => {
  try {
    const { flag } = req.body;

    if (flag !== 0 && flag !== 1) {
      return res.status(400).json({ message: 'Flag must be 0 or 1' });
    }

    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { flag },
      { new: true, runValidators: true }
    );
    if (!updatedContact) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Review Updated'});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
