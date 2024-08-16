const router = require("express").Router();
const {Answer } = require("../db/models");
router.route("/")
.get(async (req, res) => {
  try {
    const allAnswers = await Answer.findAll();
    res.json(allAnswers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

router.route("/:id")
.get(async (req, res) => {
  try {
    const { id } = req.params;
    const allAnswers = await Answer.findAll({ where: { questionId:id } });
    res.json(allAnswers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports=router