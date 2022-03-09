const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const User = require("../model/User");

/* ############################################################
 @load user.....
 1. find user by the id in the auth middleware req.user.id
 2. send user to the client 
*/
router.get("/", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password")
    res.status(200).json(user)
  } catch (error) {
    console.error(error)
    res.status(500).json("Server Error")
  }
})
/* ############################################################
@operation : login users
@route : /api/auth
@method : post
 1. find user by {email:req.body.email}.(send wrong credentials error), if there isn't a user
 2. compare the password. (send wrong credentials error)
 3. generate a token to send to client
*/

router.post(
  "/",
  [
    check("email", "please enter a valid email").isEmail(),
    check("password", "password is required").exists(),
  ],
  async (req, res) => {
    const { email, password } = req.body
    // query user from the db by email
    const user = await User.findOne({ email })
    // check if there's not a user
    console.log(user)
    if (!user) {
      return res
        .status(400)
        .json({ errors: { message: "invalid credentials" } })
    }
    // compare the req.body.password with the user's password
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      return res
        .status(400)
        .json({ errors: { message: "invalid credentials" } })
    }
    // generate a token and send it to the client
    const payload = {
      user: {
        id: user.id,
      },
    }
    jwt.sign(
      payload,
      config.get("jwtKey"),
      { expiresIn: 360000 },
      (error, token) => {
        if (error) throw error
        console.log(token)
        res.json({ token })
      }
    )
  }
)
router.post(
  "/google",

  async (req, res) => {
    const { userName, email, googleId, password, isAdmin, profileType, photo } =
      req.body
    let user = await User.findOne({ $or: [{ googleId }, { email }] })
    console.log("old: ", user)
    if (user) {
      const payload = {
        user: {
          id: user.id,
        },
      }
      jwt.sign(
        payload,
        config.get("jwtKey"),
        { expiresIn: 3600000000 },
        (error, token) => {
          if (error) throw error
          console.log(token)
          res.json({ token })
        }
      )
    }
    if (!user) {
      const newuser = {
        userName,
        password,
        email,
        googleId,
        isAdmin,
        profileType,
        photo,
      }
      user = new User(newuser)
      await user.save()
      console.log("new: ", user)
    }
  }
)

module.exports = router;
