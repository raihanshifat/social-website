const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");
const FollowerModel = require("../models/FollowerModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const isEmail = require("validator/lib/isEmail");
const userPng =
  "https://res.cloudinary.com/indersingh/image/upload/v1593464618/App/user_mklcpl.png";


  router.post("/",async (req,res)=>{
    const {name,email,password}=req.body.user;
    if(!isEmail(email)){
      return res.status(401).send("Invalid Email");
    }
    if (password.length < 6) {
      return res.status(401).send("Password must be atleast 6 characters");
    }
    let temp;
    temp=await UserModel.findOne({email:email.toLowerCase()})
    if(temp)
    {
      return res.status(401).send("Email is already taken")
    }
    try{
      let user=new UserModel(
        {
          name:name,
          email:email.toLowerCase(),
          password:password,
          profilePicUrl: req.body.profilePicUrl || userPng
        })
      user.password = await bcrypt.hash(password, 10);
      await user.save();
      await new FollowerModel({ user: user._id, followers: [], following: [] }).save();

      const payload = { userId: user._id };
      jwt.sign(payload, process.env.jwtSecret, { expiresIn: "2d" }, (err, token) => {
        if (err) throw err;
        res.status(200).json(token);
      });
    } catch (error) {
      console.error(error);
      return res.status(500).send(`Server error`);
    }
})

module.exports = router;

