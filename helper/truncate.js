const { User_game } = require("../models");
const { User_game_biodata } = require("../models");
const { User_game_history } = require("../models");

//
module.exports = {
  user: async () => {
    await User_game.destroy({ truncate: true, restartIdentity: true });
  },
  userBio: async () => {
    await User_game_biodata.destroy({ truncate: true, restartIdentity: true });
  },
  userHistory: async () => {
    await User_game_history.destroy({ truncate: true, restartIdentity: true });
  },
  //   userBioDelete: async () => {
  //     await User_game_biodata.destroy({ where: { id: 1 } });
  //   },
  //   userBioAdd: async () => {
  //     await User_game_biodata.create({
  //       username: "userTest",
  //       bio: "Bio Test",
  //       user_id: 1,
  //     });
  //   },
};
