const pool = require("../config/mysql-config.js");

exports.getCategory = async (limit) => {
  try {
    if (limit) {
      const [rows] = await pool.query(
        `SELECt * FROM Category ORDER BY CategoryId DESC LIMIT  ${limit}`
      );
      return rows;
    }
  } catch (err) {
    console.log(err);
  }
};
