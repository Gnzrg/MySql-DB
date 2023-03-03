const express = require("express");

const router = express.Router();
const user = require("../controllers/user.controller.js");

router.get("/user", user.getAll);
router.get("/user/:id", user.getOne);
router.post("/user", user.create);
router.delete("/user/:id", user.deleteUser);
router.put("/user/:id", user.updateUser);

module.exports = router;
