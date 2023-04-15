const axios = require("axios");
const router = require("../routes/auth");

async function bmg(IIN, token) {
  try {
    return await axios.get(`http://hakaton.gov4c.kz/api/bmg/check/${IIN}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    res.send(err);
  }
}

module.exports = bmg;
