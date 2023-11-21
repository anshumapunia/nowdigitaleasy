const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes

// POST - Add Users to DB
router.post('/users', userController.addUser);

// GET - Get all Users
router.get('/users', userController.getAllUsers);

// GET - Get Single User by ID
router.get('/users/:id', userController.getUserById);

// DELETE - Delete Single User by ID
router.delete('/users/:id', userController.deleteUserById);

// PUT - Update User by ID
router.put('/users/:id', userController.updateUserById);

module.exports = router;
