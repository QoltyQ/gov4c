const express = require("express");
const router = express.Router();
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  passOrder,
} = require("../controllers/order");

router.post('/pass', passOrder);
router.post("/create", createOrder);
router.get("/", getOrders);
router.put("/update/:id", updateOrder);
router.delete("/delete/:id", deleteOrder);
router.get("/:id", getOrderById);

module.exports = router;
