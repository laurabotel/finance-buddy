const User = require('../../models/userModel.js');

const userController = {
  addUser:  async(req, res, next)=> { 
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
  }
},
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
  checkUser: async (req, res) => {
    try{
    console.log( req)
    const user = await User.findOne({ username: "req.body.username" });

 
    if (user) {
      //check if password matches
      const result = req.params.password === user.password;
      if (result) {
        res.render("secret");
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  }
   catch(error) {
    res.status(400).json({ error });
  }
  },
  saveProjection: () => {},
  findProjection: () => {},
};

module.exports = userController;
