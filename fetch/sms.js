const axios = require("axios");

async function sms(phone, smsText, token) {
  try {
    await axios.post(
      "http://hak-sms123.gov4c.kz/api/smsgateway/send",
      {
        phone,
        smsText,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = sms;
