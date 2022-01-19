const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Post = require("../model/Post");
const User = require("../model/User");
const Profile = require("../model/Profile");
const authMiddleware = require("../middlewares/authMiddleware");
const { findByIdAndRemove } = require("../model/Post");
// #route: /api/jobs
// #operation: creating a new post
// #accessibility:   protected
router.post(
  "/",
  [
    authMiddleware,
    [
      check("title", "please give a title to your post").not().isEmpty(),
      check("body", "please give a body to your post").not().isEmpty(),
    ],
  ],
  async (req, res) => {}
);
// #route: /api/jobs/
// #operation:  get all jobs
//# method:    get
// #accessibility:   protected
router.get("/", async (req, res) => {});
// #route: /api/jobs/
// #operation:  delete post
//# method:   delete
// #accessibility:   protected
router.delete("/:id", authMiddleware, async (req, res) => {});
// #route: /api/jobs/like:id
// #operation: liking a jobs
// #accessibility:   protected

router.put("/like/:id", authMiddleware, async (req, res) => {});

// #route: /api/jobs/unlike:id
// #operation: unliking a jobs
// #accessibility:   protected

router.put("/unlike/:id", authMiddleware, async (req, res) => {});
module.exports = router;
