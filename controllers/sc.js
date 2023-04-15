const SC = require("../models/sc");

const getSCs = async (req, res) => {
  const scs = await SC.findAll();
  res.status(200).send(scs);
};

const getSCById = async (req, res) => {
  const { id } = req.params;
  const sc = await SC.findOne({ where: { id } });
  res.status(200).send(sc);
};

const updateSC = async (req, res) => {
  const { id } = req.params;
  const { name, address, phone, email, password } = req.body;
  const updatedSC = await SC.update(
    {
      name,
      address,
      phone,
      email,
      password,
    },
    { where: { id } }
  );
  res.status(200).send(updatedSC);
};

const deleteSC = async (req, res) => {
  const { id } = req.params;
  await SC.destroy({ where: { id } });
  res.status(200).send("SC deleted");
};

module.exports = {
  getSCs,
  getSCById,
  updateSC,
  deleteSC,
};
