const express = require("express");
const router = express.Router();
const {
    getRequests,
    createRequest,
    updateRequest,
    deleteRequest
} = require('../controllers/requests');


router.post('/new', createRequest)
router.get('/all', getRequests);
router.post('/:id', updateRequest);
router.delete('/:id', deleteRequest)

module.exports = router;
