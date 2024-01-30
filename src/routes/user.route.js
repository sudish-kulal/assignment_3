
const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.get("/list",userController.listUser);

router.post("/create",userController.createUser)

router.put("/update",userController.updateUser)

module.exports = router;
