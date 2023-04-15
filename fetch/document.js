const axios = require("axios");
const sms = require("../fetch/sms");
const fetchToken = require("../fetch/token");
const bmg = require("../fetch/bmg");
const fl = require("../fetch/fl");
const Document = require("../models/Document");

const document = async (req, res) => {
  try {
    const { url } = req.body;

    const { data } = await axios.get(url);

    const doc = data.data;

    const urlParams = new URLSearchParams(url);
    const query = url.substring(url.indexOf("?") + 1);
    const request = new URLSearchParams(query);
    const request_id = request.get("requestId");
    const IIN = urlParams.get("requestIIN");

    const token = await fetchToken();

    let phone = await bmg(IIN, token.data.access_token);
    phone = phone.data.phone;
    await sms(
      phone,
      `Заявка №${request_id} на получение документа успешно подана`,
      token.data.access_token
    );
    let client = await fl(IIN, token.data.access_token);
    client = client.data;
    const newDoc = await Document.create({
      title: doc.serviceType.nameRu,
      client_firstname: client.firstName,
      client_lastname: client.lastName,
      client_phone: phone,
      client_IIN: IIN,
      order_id: request_id,
      order_date: doc.statusDate,
    });
    console.log(newDoc, "asdasd");
    res.send(newDoc);
  } catch (err) {
    res.send(err);
  }
};

module.exports = document;
