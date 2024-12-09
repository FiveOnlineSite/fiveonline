const express = require("express");
const dotenv = require("dotenv");
const connectDatabase = require("./database");
const Route = require("./routes/index");

dotenv.config();

const app = express();
app.use(express.json());

connectDatabase();

app.use("/api/auth", Route.authRoute);
app.use("/api/user", Route.userRoute);

app.get("/", (req, res) => {
  res.send("FiveOnline");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Server connection failed due to ${error}`);
  }
  console.log(`Server is running on port ${PORT}`);
});
