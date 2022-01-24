const express = require("express");
const db = require("./config/db");
const app = express();
const cors = require("cors");
db();
// init middlewares
app.use(express.json());
app.use(cors());
// middlewares
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/dev_profiles", require("./routes/dev_profiles"));
app.use("/api/jobs", require("./routes/jobs"));

app.listen(8000, () => console.log("listening to  port 8000"));
