const express = require("express");
const router = express.Router();

const UserController = require("../controllers/user.controller");
const authentication = require("../middleware/authentication");
const authorization = require("../middleware/authorization");

// Authentication
router.use(authentication);
router.get("/", UserController.getAllUser);
router.get("/:id", UserController.getUserbyId);

// Authorization
router.use("/:id", authorization);
router.put("/:id", UserController.updateUserById);
router.delete("/:id", UserController.deleteUserById);

module.exports = router;
