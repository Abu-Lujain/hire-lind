const express = require("express")
const passport = require("passport")
const router = express.Router()

router.get(
  "/login/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
)

router.get(
  "/google/redirect",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    req.user
    res.redirect("/")
  }
)
module.exports = router
