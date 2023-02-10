const { json } = require("express");
const fs = require("fs");

const dataFile = process.cwd() + "/data/brand.json";

exports.getAll = (req, res) => {
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const savedData = JSON.parse(data);
    return res.json({ status: true, result: savedData });
  });
};
exports.create = (req, res) => {
  const { brandId, brandName } = req.body;

  fs.readFile(dataFile, (err, data) => {
    const parsedData = JSON.parse(data);

    parsedData.push({ brandId, brandName });
    console.log(parsedData);

    fs.writeFile(
      dataFile,
      JSON.stringify(parsedData),

      (writeErr) => {
        if (writeErr) {
          return res.json({ status: false, message: writeErr });
        }
        return res.json({ status: true, result: parsedData });
      }
    );
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const parsedData = JSON.parse(data);
    const deletedData = parsedData.filter((e) => e.brandId != id);

    fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: false, message: writeErr });
      }
      return res.json({ status: true, result: deletedData });
    });
  });
};
exports.update = (req, res) => {
  const { id } = req.params;
  const { brandId, brandName } = req.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const parsedData = JSON.parse(data);
    const updatedData = parsedData.map((brandObj) => {
      if (brandObj.brandId == id) {
        return { ...catObj, brandId, brandName };
      } else {
        return catObj;
      }
    });
    fs.writeFile(dataFile, JSON.stringify(updatedData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: true, message: writeErr });
      }
      return res.json({ status: true, result: updatedData });
    });
  });
};
