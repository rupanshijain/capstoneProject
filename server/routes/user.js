const router = require('express').Router();
const auth = require('../middleware/auth');
const AdminUser = require('../models/adminUser');

router.get('/profile', auth, async (req, res) => {
  try {
    const user = await AdminUser.findById(req.userId).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
