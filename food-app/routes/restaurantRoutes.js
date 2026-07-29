const express = require("express");

const authMiddleware = require("../middlewares/authMiddleware");
const {
  createRestaurantController,
  getAllRestaurantController,
  getRestaurantById,
  deleteRestaurantController,
} = require("../controllers/restaurantController");
const router = express.Router();

//routes
// CREATE RESTAURANT || POST
router.post("/create", authMiddleware, createRestaurantController);

// GET ALL RESTAURANT || GET
router.get("/getAll", getAllRestaurantController);

// GET RESTAURANT BY ID || GET
router.get("/get/:id", getRestaurantById);

// DELETE RESTAURANT || DELETE

router.delete("/delete/:id", authMiddleware, deleteRestaurantController);

module.exports = router;
