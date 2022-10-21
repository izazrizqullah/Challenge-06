const express = require("express");
const router = express.Router();
const user_game = require("../controllers/user_game");
const auth = require("../controllers/auth");
const user_game_biodata = require("../controllers/user_game_biodata");
const user_game_history = require("../controllers/user_game_history");

// auth
router.post("/auth/login", auth.login);

// usergame
router.post("/usergame", user_game.createUser);
router.get("/usergame", user_game.getAll);
router.put("/usergame", user_game.updateUser);

module.exports = router;
