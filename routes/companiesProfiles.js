const express = require("express");
const router = express.Router();
const User = require("../model/User");
const { check, validationResult } = require("express-validator");
const authMiddleware = require("../middlewares/authMiddleware");
const Company = require("../model/Company");

/* ############################################################
@operation : get company for current user
@route : /api/dev_profiles/me
@method : get
@access : private
*/

router.post("/", authMiddleware, async (req, res) => {
  const {
    name,
    loc,
    area,
    logo,
    jobs,
    website,
    about,
    products,
    services,
    foundedYear,
    email,
  } = req.body;
  let companyData = {};
  companyData.user = req.user.id;
  if (name) companyData.name = name;
  if (loc) companyData.loc = loc;
  if (email) companyData.email = email;
  if (area) companyData.area = area;
  if (website) companyData.website = website;
  if (about) companyData.about = about;
  if (logo) companyData.logo = logo;
  if (jobs) companyData.jobs = jobs;
  if (products) companyData.products = products;
  if (services) companyData.services = services;
  if (foundedYear) companyData.foundedYear = foundedYear;
  console.log(companyData.user);
  try {
    let company = await Company.findOne({ user: req.user.id });
    if (company) {
      company = await Company.findOneAndUpdate(
        { user: req.user.id },
        { $set: companyData },
        { new: true }
      );
      await company.save();
      res.status(200).json(company);
    }
    company = new Company(companyData);
    await company.save();
    res.status(200).json(company);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});
// get current user's company
router.get("/company", authMiddleware, async (req, res) => {
  try {
    const company = await Company.findOne({ user: req.user.id });
    if (!company) res.status(404).send("No company profile");
    res.json(company);
  } catch (error) {
    console.error(error);
  }
});

// delete company
router.delete("/company", authMiddleware, async (req, res) => {
  console.log(req.user.id);
  try {
    const company = await Company.findOneAndRemove({ user: req.user.id });
    if (!company) res.json("company not found");
    res.json("you have deleted your comapny profile");
  } catch (error) {
    console.error(error);
  }
});
// delete company

module.exports = router;
