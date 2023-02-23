const express = require("express");
const {
  getAllPersons,
  getOnePerson,
  deletePerson,
  updatePerson,
  creatPerson,
  searchByName,
  filterByage,
} = require("../controllers/personController");
const router = express.Router();

router.get("/person", getAllPersons);
router.get("/person/:id", getOnePerson);
router.post("/person", creatPerson);
router.delete("/person/:id", deletePerson);
router.put("/person/:id", updatePerson);
router.get("/search", searchByName);
router.get("/filter", filterByage);

module.exports = router;
