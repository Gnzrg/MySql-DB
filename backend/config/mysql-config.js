const mysql = require("mysql2");
const pool = mysql
  .createPool({
    host: "127.0.0.1",
    port: 3376,
    user: "root",
    password: "",
    database: "shop",
  })
  .promise();
module.exports = pool;
