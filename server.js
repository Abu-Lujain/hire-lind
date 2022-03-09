const path = require("path")
const express = require("express")
const db = require("./config/db")
const app = express()
const cors = require("cors")
const exp = require("constants")
db()
// init middlewares
// console.log(path.join(__dirname, "/uploads"));
app.use(express.json())
app.use(
  cors()
  //   {
  //   origin: "http://localhost:3000",
  //   methods: "GET, POST, PUT, DELETE, PATCH",
  //   credentials: true,
  // }
)
// setting static folder
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))
// middlewares routes
app.use("/api/users", require("./routes/users"))
app.use("/api/auth", require("./routes/auth"))
app.use("/api/developersProfiles", require("./routes/developersProfiles"))
app.use("/api/companiesProfiles", require("./routes/companiesProfiles"))
app.use("/api/jobs", require("./routes/jobs"))
app.use("/api/posts", require("./routes/posts"))
app.use("/api/products", require("./routes/products"))
app.use("/api/uploads", require("./routes/uploads"))
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
  app.get("*", (req, res) => {
    app.use(
      express.static(path.resolve(__dirname, "client", "build", "index.html"))
    )
  })
}
app.listen(process.env.PORT || 8000, () =>
  console.log("listening to  port 8000")
)
