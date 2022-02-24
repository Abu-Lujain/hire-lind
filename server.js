const path = require("path");
const express = require("express");
const db = require("./config/db");
const app = express();
const cors = require("cors");
db();
// init middlewares
// console.log(path.join(__dirname, "/uploads"));
app.use(express.json());
app.use(cors());
// setting static folder
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
// middlewares routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/developersProfiles", require("./routes/developersProfiles"));
app.use("/api/companiesProfiles", require("./routes/companiesProfiles"));
app.use("/api/jobs", require("./routes/jobs"));
app.use("/api/posts", require("./routes/posts"))
app.use("/api/products", require("./routes/products"))
app.use("/api/uploads", require("./routes/uploads"));

app.listen(8000, () => console.log("listening to  port 8000"));
