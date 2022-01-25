const router = require("express").Router();
const multer = require("multer");
const path = require("path");

// creating the diskStorage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cd) {
    cd(
      null,
      `${file.fieldname}-4Carrer-${Date.now()}${path.extname(
        file.originalname
      )}`
    );
  },
});
const upload = multer({
  storage,
});
router.post("/", upload.single("photo"), (req, res) => {
  console.log(req.file.path);
  try {
    res.status(200).json(`/${req.file.path}`);
  } catch (error) {
    console.log(error);
  }
}),
  (module.exports = router);
