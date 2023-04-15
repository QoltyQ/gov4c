const { generateOTP } = require("../helper/helper");
const Order = require("../models/Order");
const OTP = require("../models/OTP")

const createOrder = async (req, res) => {
  const { status, order_num, courier_id, client_id, representative, address_sc, address_deliv, price } =
    req.body;
  const newOrder = await Order.create({
    status,
    order_num,
    courier_id,
    client_id,
    representative,
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
  const { status, order_num, courier_id, client_id, representative, address_sc, address_deliv, price } =
    req.body;
  const updatedOrder = await Order.update(
    {
      status,
      order_num,
      courier_id,
      client_id,
      representative,
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

const passOrder = async (req, res) =>{
  const { order_id } = req.query
  const curOrder = await Order.findByPk(order_id);
  const { order_num, status } = curOrder 

  await curOrder.update({
    status: (status+1),
  });

  const otp = generateOTP()
  const curOTP = await OTP.findOne({where: { order_num }})
  console.log("prev otp", curOTP.otp);
  await curOTP.update({
    otp: otp,
  })
  console.log("new otp", otp);

  res.send(curOrder);
}

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrder,
  deleteOrder,
  passOrder
};
