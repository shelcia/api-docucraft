const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const PORT = process.env.PORT || 4050;

//IMPORT ROUTES
const authRoute = require("./routes/auth/auth");

dotenv.config();

//CONNECTION TO DATABASE
mongoose.connect(process.env.DB_CONNECT).catch((error) => console.log(error));

//MIDDLEWARE
app.use(cors());
app.use(
  rateLimit({
    windowMs: 1 * 60 * 1000, // 120 request per 1 minute
    max: 160,
  })
);
app.use(express.json());

//ROUTE MIDDLEWARE

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send(
    `<a href="https://github.com/shelcia/api-docucraft">This is a backend app , click to open code</a>`
  );
});
app.listen(PORT, () => console.log(`server up and running at  ${PORT}`));
