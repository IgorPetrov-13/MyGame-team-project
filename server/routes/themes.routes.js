const router = require("express").Router();
const { Theme, Question } = require("../db/models");
router.route("/")
.get(async (req, res) => {
  try {
    const allThemesAndQuest = await Theme.findAll({include:[{model: Question}]});
    res.json(allThemesAndQuest);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})



module.exports=router