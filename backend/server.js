const express = require("express");
const cors = require("cors");
const port = 3000;
const sequelize = require("./utils/dbConfig");
const reviewRoutes = require("./routes/reviewRoutes");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("review system");
});
app.use("/", reviewRoutes);

sequelize
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log("server connected");
    });
  })
  .catch((error) => {
    console.log(error);
  });
