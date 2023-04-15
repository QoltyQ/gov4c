const OTP = require("../models/OTP");

const sendOTP = async (req, res) => {
  const { order_id, otp } = req.body;
  const newOTP = await OTP.create({
    order_id,
    otp,
  });
  res.status(200).send(newOTP);
};

const verifyOTP = async (req, res) => {
  const { order_id, otp } = req.body;
  const otpFromDB = await OTP.findOne({ where: { order_id } });
  if (otpFromDB.otp === otp) {
    res.status(200).send("OK");
  } else {
    res.status(400).send("Invalid OTP");
  }
};

module.exports = {
  sendOTP,
  verifyOTP,
};
