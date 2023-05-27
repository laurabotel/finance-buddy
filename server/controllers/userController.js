
const User = require('../../models/userModel.js');

const userController = {
  addUser: async(req, res, next) => {
    try{
      const user = new User({
        username: "req.body.username",
        // avatar: req.body.avatar,
        password: "req.body.password",
        // projections: req.body.projections,
      })
      res.locals.newUser = await user.save()
     return next()
      // res.send(user)
    }
    catch(err){
      console.log(err)
      return next({
        
          message:
            'error in userController.findUser method, check logs for more info',
          log: `error in userController.findUser: ${err}`,
          status: 400,
        
      });
    }

  },
  findUser: () => {},
  saveProjection: () => {},
  findProjection: () => {},
};

module.exports = userController;
