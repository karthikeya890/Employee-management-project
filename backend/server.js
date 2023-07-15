const express = require("express");
const employees_route = require("./routes/employeesRoute");
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/employees", employees_route);
app.listen(3005, () => {
  console.log("Server running at http://localhost:3005");
});
