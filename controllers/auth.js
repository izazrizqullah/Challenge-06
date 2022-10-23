require("dotenv").config();
const { User_game } = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { JWT_SIGNATURE_KEY } = process.env;

module.exports = {
  create: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const found = await User_game.findOne({ where: { username } });
      if (found) {
        return res.status(400).json({
          status: false,
          message: "username already used!",
          data: null,
        });
      }
      const encryptedPassword = await bcrypt.hash(password, 10);

      const created = await User_game.create({
        username,
        password: encryptedPassword,
      });
      return res.status(201).json({
        status: true,
        message: "create data successful!",
        data: {
          password: created.password,
          username: created.username,
        },
      });
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      const { username, password } = req.body;

      const user = await User_game.findOne({
        where: {
          username,
        },
      });

      if (!user) {
        return res.status(400).json({
          status: false,
          message: "username or password doesn't match",
          data: null,
        });
      }

      const correct = await bcrypt.compare(password, user.password);

      if (!correct) {
        return res.status(400).json({
          status: false,
          message: "username or password doesn't match",
          data: null,
        });
      }

      payload = {
        id: user.id,
        username: user.username,
        // password: User_game.password,
      };

      const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

      return res.status(200).json({
        status: true,
        message: "login successful!",
        data: {
          user,
          token: token,
        },
      });
    } catch (err) {
      next(err);
    }
  },
};
