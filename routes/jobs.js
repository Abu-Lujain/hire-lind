const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const Job = require("../model/Job")
const authMiddleware = require("../middlewares/authMiddleware")

// @operation : create job
// @route : /api/jobs / @method : post / @access : private
router.post(
  "/",
  [
    authMiddleware,
    [
      check("title", "title is required").not().isEmpty(),
      check("salary", " please provide a rough salary").not().isEmpty(),
      check("shift", "what kind of shift of this job? full-time or part-time")
        .not()
        .isEmpty(),
      check("recruitmentProcess", "what is the process of recruitment")
        .not()
        .isEmpty(),
      check("description", "description is required?").not().isEmpty(),
      check("experienceRequired", "experience is required is required?")
        .not()
        .isEmpty(),
      check("industry", "please choose an Industry").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const {
      perks,
      recruitmentProcess,
      description,
      experienceRequired,
      title,
      salary,
      shift,
      industry,
      companyName,
    } = req.body

    const jobObject = {}
    jobObject.company = req.user.id
    if (recruitmentProcess) jobObject.recruitmentProcess = recruitmentProcess
    if (experienceRequired) jobObject.experienceRequired = experienceRequired
    if (description) jobObject.description = description
    if (companyName) jobObject.companyName = companyName
    if (industry) jobObject.industry = industry
    if (salary) jobObject.salary = salary
    if (shift) jobObject.shift = shift
    if (title) jobObject.title = title
    if (perks)
      jobObject.perks = perks.split(",").map((perk) => {
        return perk.trim()
      })

    console.log(jobObject.perks)
    try {
      let job = await Job.findOne({ company: req.user.id })
      job = new Job(jobObject)
      await job.save()
      res.json(job)
    } catch (error) {
      console.error(error)
      res.status(500).send("Server Error")
    }
  }
)
// @operation : update job
// @route : /api/jobs / @method : put /@access : private
router.put(
  "/:id",
  [
    authMiddleware,
    [
      check("title", "title is required").not().isEmpty(),
      check("salary", " please provide a rough salary").not().isEmpty(),
      check("shift", "what kind of shift of this job? full-time or part-time")
        .not()
        .isEmpty(),
      check("recruitmentProcess", "what is the process of recruitment")
        .not()
        .isEmpty(),
      check("description", "description is required?").not().isEmpty(),
      check("experienceRequired", "experience is required is required?")
        .not()
        .isEmpty(),
      check("industry", "please choose an Industry").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log(errors)
      return res.status(400).json({ errors: errors.array() })
    }
    try {
      const job = await Job.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      )
      console.log(job)
      res.json(job)
    } catch (error) {
      console.error(error)
    }
  }
)
// @operation : get all jobs of a particular company
// @route : /api/jobs @method : get @access : private
router.get("/:id", async (req, res) => {
  const jobs = await Job.find({ company: req.params.id })
  res.json(jobs)
})
// @operation : get all jobs
// @route : /api/jobs /@method : get /@access : public
router.get("/", async (req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 })
  res.json(jobs)
})
// @operation : get a single job
// @route : /api/jobs /@method : get /@access : public
router.get("/job/:id", async (req, res) => {
  try {
    const job = await Job.findOne({ _id: req.params.id })
    if (!job) throw new Error({ errors: { msg: "Job Not found" } })
    res.json(job)
  } catch (error) {
    if (error.name === "CastError")
      res.json({ errors: { msg: "Job Not found" } })
    res.status(500).send(error)
  }
})
// @operation :delete a single job
// @route : /api/jobs /@method : delete /@access : private
router.delete("/job/:id", async (req, res) => {
  const job = await Job.findById(req.params.id)
  if (!job) return res.status(404).send("No Job to Delete")
  await Job.findByIdAndRemove(req.params.id)
  res.status(200).send("job was delete successfully")
})

module.exports = router;
