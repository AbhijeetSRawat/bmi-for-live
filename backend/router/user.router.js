const express = require('express');
const userController = require('../controller/user.controller');
const router = express.Router();
router.get(
    "/", userController.userGet
)
router.post(
    "/", userController.userCreate
)
router.get(
    "/", userController.confromPasswords
)
module.exports = router