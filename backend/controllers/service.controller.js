const { json } = require("express");
const fs = require("fs");
const uuid = require("uuid");
const dataFile = process.cwd() + "/data/service.json";

exports.getAll = (req, res) => {
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const savedData = JSON.parse(data);
    return { status: true, result: savedData };
  });
};
