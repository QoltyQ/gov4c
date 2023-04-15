const Request = require("../models/Request");
const Order = require("../models/Order");

const createRequest = async (req, res) => {
  const { address_sc, address_deliv, price, status } = req.body;

  try {
    await Request.create({
      address_sc,
      address_deliv,
      price,
      status,
    });
    res.status(200).send("OK");
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred");
  }
};

const getRequests = async (req, res) => {
  const allReqs = await Request.findAll({ where: { status: false } });
  res.json(allReqs);
};

const updateRequest = async (req, res) => {
  const { address_sc, address_deliv, price, status } = req.body;
  // console.log(req.params.id);
  const updReq = await Request.findByPk(req.params.id);

  if (!updReq) {
    return res.status(404).send("Request was not found");
  }
  await updReq.update({
    address_sc,
    address_deliv,
    price,
    status,
  });

  res.send(updReq);
};

const deleteRequest = async (req, res) => {
  const { id } = req.params;

  const delReq = await Request.findByPk(id);
  if (!delReq) {
    return res.status(404).send("Request was not found");
  }

  try {
    await delReq.destroy();
    res.send("Successfully has deleted");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getRequests,
  updateRequest,
  createRequest,
  deleteRequest,
};
