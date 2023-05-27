const mongoose = require('mongoose');
let dotenv = require('dotenv').config();
console.log(dotenv);
const mongoSecret = dotenv.parsed.MONGO_URI;
console.log(mongoSecret);

// gOmpE22WKJQCbAjZ
const URI = `mongodb+srv://laurabotel:${mongoSecret}@cluster0.ewwt1se.mongodb.net/`;

mongoose
  .connect(URI)
  .then(() => {
    console.log('connected!!');
  })
  .catch((err) => {
    return console.log('there was an error connecting:, ', err);
  });

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  avatar: { type: Object },
  password: { type: String, required: true },
  projections: { type: Array },
});

module.exports = mongoose.model('User', userSchema); // <-- export your model
