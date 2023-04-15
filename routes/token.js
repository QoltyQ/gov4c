const router = require("express").Router();

const token = require("../fetch/token");
const bmg = require("../fetch/bmg");
const sms = require("../fetch/sms");
const fl = require("../fetch/fl");
const document = require("../fetch/document");

router.post("/", token);
router.post("/bmg", bmg);
router.post("/sms", sms);
router.post("/fl", fl);
router.post("/document", document);

module.exports = router;
