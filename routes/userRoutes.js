const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/create', userController.createUser);

router.get('/users', userController.getUsers);

router.get('/user/filter/:_id', userController.getUserById); // New route to get user by ID

router.delete('/user/:userId', userController.deleteUserById); // New route to delete user by ID


module.exports = router;
