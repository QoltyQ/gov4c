const axios = require("axios");
const router = require("../routes/auth");

async function fl(IIN, token) {
  try {
    return await axios.get(`http://hakaton-fl.gov4c.kz/api/persons/${IIN}/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {
    res.send(err);
  }
}

module.exports = fl;
