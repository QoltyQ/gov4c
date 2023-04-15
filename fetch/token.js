const axios = require("axios");

async function token() {
  try {
    return await axios.post(
      "http://hakaton-idp.gov4c.kz/auth/realms/con-web/protocol/openid-connect/token",
      {
        username: "test-operator",
        password: "DjrsmA9RMXRl",
        client_id: "cw-queue-service",
        grant_type: "password",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
  } catch (err) {
    return err;
  }
}

module.exports = token;
