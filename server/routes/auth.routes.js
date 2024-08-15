const router = require("express").Router();
const jwtConfig = require("../Config/jwtConfig");
const bcrypt = require("bcrypt");
const { User } = require("../db/models");
const generateTokens = require("../utils/generateTokens");

router.post("/registration", async (req, res) => {
  try {
    const { name, email, password, score } = req.body;
    if (name.trim() === "" || email.trim() === "" || password.trim() === "") {
      return res.status(400).json({ message: "Пустое поле" });
    }
    const userInDb = await User.findOne({ where: { email } });

    if (userInDb) {
      return res.status(400).json({ message: "Пользователь уже существует" });
    } else {
      const user = (
        await User.create({
          name,
          email,
          password: await bcrypt.hash(password, 10),
          score
        })
      ).get();

      const { accessToken, refreshToken } = generateTokens({ user });

      res
        .status(201)
        .cookie(jwtConfig.refresh.type, refreshToken, {
          httpOnly: true,
          maxAge: jwtConfig.refresh.expiresIn,
        })
        .json({ accessToken, user });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.post("/authorization", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email.trim() === "" || password.trim() === "") {
      return res.status(400).json({ message: "Empty" });
    }

    const user = (await User.findOne({ where: { email } })).get();
    const isMatch = await bcrypt.compare(password, user.password);

    if (user && isMatch) {
      const { accessToken, refreshToken } = generateTokens({ user });

      res
        .status(200)
        .cookie(jwtConfig.refresh.type, refreshToken, {
          httpOnly: true,
          maxAge: jwtConfig.refresh.expiresIn,
        })
        .json({ accessToken, user });
    } else {
      return res.status(400).json({ message: "In correct!" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.delete("/logout", async (req, res) => {
  res.clearCookie(jwtConfig.refresh.type).json({ accessToken: "" });
});
module.exports = router;
