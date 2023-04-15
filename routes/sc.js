const router = require("express").Router();

const { getSCs, getSCById, updateSC, deleteSC } = require("../controllers/sc");

router.get("/", getSCs);
router.get("/:id", getSCById);
router.put("/update/:id", updateSC);
router.delete("/delete/:id", deleteSC);

module.exports = router;
