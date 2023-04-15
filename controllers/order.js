const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const { status, courier_id, client_id, address_sc, address_deliv, price } =
    req.body;
  const newOrder = await Order.create({
    status,
    courier_id,
    client_id,
    address_sc,
    address_deliv,
    price,
  });
  res.status(200).send(newOrder);
};

const getOrders = async (req, res) => {
  const orders = await Order.findAll();
  res.status(200).send(orders);
};

const getOrderById = async (req, res) => {
  const { id } = req.params;
  const order = await Order.findOne({ where: { id } });
  res.status(200).send(order);
};

const updateOrder = async (req, res) => {
  const { id } = req.params;
  const { status, courier_id, client_id, address_sc, address_deliv, price } =
    req.body;
  const updatedOrder = await Order.update(
    {
      status,
      courier_id,
      client_id,
      address_sc,
      address_deliv,
      price,
    },
    { where: { id } }
  );
  res.status(200).send(updatedOrder);
};

const deleteOrder = async (req, res) => {
  const { id } = req.params;
  await Order.destroy({ where: { id } });
  res.status(200).send("Order deleted");
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
};
