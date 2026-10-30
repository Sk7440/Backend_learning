const users = [];
const User = require('../models/userModel')
exports.signup = async (req, res) => {
  console.log(req.body);
  let { name, email, password } = req.body


  if (
    !name || name === "" ||
    req.body.email === "" ||
    req.body.password === ""
  ) {
    return res.status(400).json({ msg: "please fill all the required feilds" });
  } else {
    
    // await User.create(req.body)
    // const founduser = await User.findOne({email: email})
    // console.log(founduser);
    // const founduser = await User.find()



    console.log("Sign up route hit");
    res.status(200).json({ msg: "register successfull" });
  }
};
exports.login = (req, res) => {
  console.log(req.body);

  console.log(users);
  users.find((ele, idx) => {
    if (ele.email === req.body.email && ele.password == req.body.password) {
      res.status(200).json({ msg: "login successfull" });
    } else {
      res.status(400).json({ msg: "please check you credentials" });
    }
  });
};
