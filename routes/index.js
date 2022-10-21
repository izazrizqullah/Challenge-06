const express = require("express");
const router = express.Router();
const user_game = require("../controllers/user_game");
const auth = require("../controllers/auth");
const user_game_biodata = require("../controllers/user_game_biodata");
const user_game_history = require("../controllers/user_game_history");

// auth
router.post("/auth/login", auth.login);

// usergame
router.post("/usergame/create", user_game.createUser);
router.get("/usergame/get", user_game.getAll);
router.put("/usergame/update/:id", user_game.updateUser);
router.delete("/usergame/delete/:id", user_game.deleteUser);

// userbio
router.post("/bio/create", user_game_biodata.createBio);
router.get("/bio/get", user_game_biodata.getAll);
router.put("/bio/update/:id", user_game_biodata.updateBio);
router.delete("/bio/delete/:id", user_game_biodata.deleteBio);

// userhistory
router.post("/history/create", user_game_history.createHistory);
router.get("/history/get", user_game_history.getAll);
router.put("/history/update/:id", user_game_history.updateHistory);
router.delete("/history/delete/:id", user_game_history.deleteHistory);

module.exports = router;
