const express = require("express");
const router = express.Router();
const {
    getRequests,
    createRequest,
    updateRequest,
    deleteRequest,
    acceptRequest,
} = require('../controllers/requests');


router.post('/new', createRequest);
router.get('/', getRequests);
router.post('/create', acceptRequest);
router.post('/:id', updateRequest);
router.delete('/:id', deleteRequest);

module.exports = router;
