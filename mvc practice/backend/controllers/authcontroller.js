const users = [];
exports.signup = (req, res) => {
  let {name, email, password} =  req.body


  if (
    !name || name === "" ||
    req.body.email === "" ||
    req.body.password === ""
  ) {
    return res.status(400).json({ msg: "please fill all the required feilds" });
  } else {
    users.push(req.body);
    console.log(users);

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
