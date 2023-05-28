const User = require('../../models/userModel.js');

const userController = {
  addUser: () => {},
  findUser: async (req, res, next) => {
    try {
      const username = req.params.username;
      const userInfo = await User.find({ username });
      res.locals.user = userInfo;
      return next();
    } catch (err) {
      return next({
        message:
          'error in userController.findUser method, check logs for more info',
        log: `error in userController.findUser: ${err}`,
        status: 400,
      });
    }
  },
  saveProjection: () => {},
  findProjection: () => {},
};

module.exports = userController;
