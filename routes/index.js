const express = require("express");
const router = express.Router();
const user_game = require("../controllers/user_game");
const auth = require("../controllers/auth");
const user_game_biodata = require("../controllers/user_game_biodata");
const user_game_history = require("../controllers/user_game_history");
const midd = require("../helper/middleware");

// auth
router.post("/auth/create", auth.create);
router.post("/auth/login", auth.login);

// usergame
router.post("/usergame/create", user_game.createUser);
router.get("/usergame/get", user_game.getAll);
router.put("/usergame/update/:id", user_game.updateUser);
router.delete("/usergame/delete/:id", user_game.deleteUser);

// userbio
router.post("/bio/create", midd.mustLogin, user_game_biodata.createBio);
router.get("/bio/get", midd.mustLogin, user_game_biodata.getAll);
router.put("/bio/update/:id", midd.mustLogin, user_game_biodata.updateBio);
router.delete("/bio/delete/:id", midd.mustLogin, user_game_biodata.deleteBio);

// userhistory
router.post("/history/create", midd.mustLogin, user_game_history.createHistory);
router.get("/history/get", midd.mustLogin, user_game_history.getAll);
router.put(
  "/history/update/:id",
  midd.mustLogin,
  user_game_history.updateHistory
);
router.delete(
  "/history/delete/:id",
  midd.mustLogin,
  user_game_history.deleteHistory
);

// router.use("/usergame", user_game);
// router.use("/auth", auth);
// router.use("/bio", user_game_biodata);
// router.use("/history", user_game_history);

module.exports = router;
