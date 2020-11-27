const { Router } = require("express");
var express = require("express");
var router = express.Router();

const { getData, addNote } = require("../DB/Models/models");

router.get("/", async function (req, res) {
  const result = await getData();
  console.log(result);
  res.json({ success: true, payload: result });
});

router.post("/", async function (req, res) {
  const noteObject = req.body;
  const result = await addNote(noteObject);
  res.json({ success: true, payload: result });
});

module.exports = router;
