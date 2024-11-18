const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.post('/register', (req, res) => UserController.register(req, res));
router.post('/login', (req, res) => UserController.login(req, res));
router.delete('/:username', (req, res) => UserController.deleteRegister(req, res));

module.exports = router;