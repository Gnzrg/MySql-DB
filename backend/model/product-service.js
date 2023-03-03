const pool = require("../config/mysql-config.js");

exports.getProducts = async (limit) => {
  try {
    if (limit) {
      const [rows] = await pool.query(
        `SELECt * FROM Products ORDER BY Productid DESC LIMIT  ${limit}`
      );
      return rows;
    }
  } catch (err) {
    console.log(err);
  }
};
