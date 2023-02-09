const express = require("express");
const cors = require("cors");
const port = 8090;
const app = express();
const fs = require("fs");
const menuRouter = require("./routes/menu.route.js");
const userRouter = require("./routes/user.route.js");
const productRouter = require("./routes/products.route.js");
const categoryRouter = require("./routes/category.route.js");
const serviceRouter = require("./routes/service.route.js");
app.use(cors());
app.use(express.json());
app.use("/api", menuRouter);
app.use("/api", userRouter);
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", serviceRouter);
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to rest API" });
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
