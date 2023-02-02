const { json } = require("express");
const fs = require("fs");

const dataFile = process.cwd() + "/data/category.json";

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
  const { categoryName, categoryId } = req.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const parsedData = JSON.parse(data);
    const newCat = { categoryId, categoryName };
    parsedData.push(newCat);

    fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: false, message: writeErr });
      }
      return res.json({ status: true, result: parsedData });
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const parsedData = JSON.parse(data);
    const deletedData = parsedData.filter((e) => e.categoryId != id);

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
  const { categoryId, categoryName } = req.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const parsedData = JSON.parse(data);
    const updatedData = parsedData.map((catObj) => {
      if (catObj.categoryId == id) {
        return { ...catObj, categoryId, categoryName };
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
