const { Router } = require("express");
const router = Router();
const userController = require("../controllers/userController");

router.post("/api/createUser", userController.createUser);
router.get("/api/getUsers", userController.getUsers);
router.delete("/api/deleteUser/:id", userController.deleteUser);

// router.post("/api/updateUser", () => {});

module.exports = router;
