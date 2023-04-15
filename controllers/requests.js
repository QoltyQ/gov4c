const Request = require('../models/Request')
const Order = require('../models/Order');
const OTP = require('../models/OTP')
const { generateOTP } = require('../helper/helper');

const createRequest = async (req, res) =>{
    const {order_num, client_id, representative, address_sc, address_deliv, price, status} = req.body;
    
    try {
        await Request.create({
            order_num,
            client_id,
            representative,
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
}

const getRequests = async (req, res) =>{
    const allReqs =  await Request.findAll({ where: { status : false } });
    res.json(allReqs);
}

const updateRequest = async (req, res) =>{
    const {order_num, client_id, representative, address_sc, address_deliv, price, status} = req.body;
    // console.log(req.params.id);
    const updReq = await Request.findByPk(req.params.id);

    await updReq.update({
        order_num,
        client_id,
        representative,
        address_sc,
        address_deliv,
        price,
        status,
    });

    res.send(updReq)
}

const deleteRequest = async (req, res) =>{
    const {id} = req.params;

    const delReq = await Request.findByPk(id)
    if (!delReq) {
        return res.status(404).send('Request was not found');
    }

    try {
        await delReq.destroy();
        res.send("Successfully has deleted");
    } catch (err) {
        console.log(err);
    }
}

const acceptRequest = async (req, res) => {
    try {
    const { courier_id, request_id } = req.query;
    // console.log(request_id);

    const request = await Request.findByPk(request_id);
    const { order_num, representative, address_sc, address_deliv, client_id, price } = request;

    const otp = generateOTP()
    const newOTPdb = await OTP.create({
        order_num,
        otp,
    });

    const newOrder = await Order.create({
        order_num,
        courier_id,
        client_id,
        representative,
        address_sc,
        address_deliv,
        price,
    });
    await Request.update({ status: true }, { where: { id: request_id } });
    
    res.status(200).send(newOrder);
    } catch (error) {
    console.log(error);
    }
};

module.exports = {
    getRequests,
    updateRequest,
    createRequest,
    deleteRequest,
    acceptRequest,
}