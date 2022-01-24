const express = require("express");
const router = express.Router();
const Profile = require("../model/Profile");
const User = require("../model/User");
const { check, validationResult } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const { findOneAndUpdate, findByIdAndUpdate } = require("../model/User");

/* ############################################################
@operation : get profile for current user
@route : /api/dev_profiles/me
@method : get
@access : private
*/
router.get("/me", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    console.log(profile);
    if (!profile)
      return res.status(404).send("there's no profile with this user");
    res.json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});
/* ############################################################
@operation : creating profile
@route : /api/dev_profiles
@method : post
@access : private
*/
router.post(
  "/",
  [authMiddleware, check("title", "title is required")],
  async (req, res) => {
    console.log("from profile");
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.json({ error: errors.array() });
    const {
      title,
      loc,
      website,
      role,
      gitHubUserName,
      bio,

      skills,
    } = req.body;
    const profileData = {};
    profileData.user = req.user.id;
    if (title) profileData.title = title;
    if (loc) profileData.loc = loc;
    if (role) profileData.role = role;
    if (website) profileData.website = website;
    if (bio) profileData.bio = bio;
    if (gitHubUserName) profileData.gitHubUserName = gitHubUserName;
    // build skills objects
    if (skills)
      profileData.skills = skills.split(",").map((skill) => skill.trim());

    try {
      let profile = await Profile.findOne({ user: req.user.id });
      if (profile) {
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileData },
          { new: true }
        );
        console.log("profile Updated");
        res.json(profile);
        console.log(profile.bio);
      }
      if (!profile) {
        console.log("profile created");
        profile = new Profile(profileData);
        await profile.save();
        res.status(201).json(profile);
      }
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "Server Error" });
    }
  }
);
// adding experience
router.put(
  "/experience",
  [
    authMiddleware,
    [
      check("from", "your from is required").not().isEmpty(),
      check("loc", " please provide a location").not().isEmpty(),
      check("company", "what is the company worked on?").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    console.log(req.body.loc);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.status(400).json({ errors: errors.array() });
    }

    const exp = req.body;

    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(exp);
      await profile.save();
      console.log(profile.experience);
      res.json(profile);
    } catch (error) {
      console.log(error.message);
    }
  }
);
// deleting experience
router.delete("/experience/:exp_id", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    // getting experience by id the matches the parmas id
    const exp = profile.experience.find((exp) => exp.id === req.params.exp_id);
    console.log(exp);
    if (!exp) {
      return res
        .status(404)
        .json({ error: { message: "Experience Not Found" } });
    }
    // grabbing the index of the experience to
    const indexToRemove = profile.experience.indexOf(exp).toString();
    const deleted = profile.experience.splice(indexToRemove, 1);
    console.log(deleted);
    await profile.save();
    res.json(profile);
  } catch (error) {
    if (error.message === "Cannot read property 'id' of undefined") {
      return res
        .status(404)
        .json({ error: { message: "Experience Not Found" } });
    }
    console.error(error.message);
  }
});
// adding education
router.put(
  "/education",
  [
    authMiddleware,
    [
      check("school", " school is required").not().isEmpty(),
      check("degree", " degree is required").not().isEmpty(),
      check("from", " from date is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { school, name, degree, loc, description, from, to } = req.body;
    const eduObj = {
      school,
      name,
      degree,
      loc,
      description,
      from,
      to,
    };
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.education.unshift(eduObj);
      await profile.save();
      res.json(profile);
    } catch (error) {
      console.error(error.message);
    }
  }
);
// deleting education
router.delete("/education/:edu_id", authMiddleware, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    // map all the ids
    const edu_arr = profile.education.map((edu) => edu._id.toString());
    const indexToRemove = edu_arr.find((edu) => edu === req.params.edu_id);
    if (indexToRemove != req.params.edu_id)
      return res.status(404).send("not found");
    profile.education.splice(indexToRemove, 1);
    await profile.save();
    res.status(200).json(profile);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
