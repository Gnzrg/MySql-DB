const { json } = require("express");
const fs = require("fs");

const dataFile = process.cwd() + "/data/category.json";
const categoryService = require("../model/category-service.js");

exports.getAll = async (req, res) => {
  const { limit } = req.query;
  try {
    const result = await categoryService.getCategory(limit);
    if (result.length > 0) {
      res.json({ status: true, result });
    }
  } catch (err) {
    console.log(err);
    res.json({ status: false, message: err });
  }
};
exports.create = (req, res) => {
  const { categoryId, categoryName } = req.body;

  fs.readFile("./data/category.json", (err, data) => {
    const parsedData = JSON.parse(data);

    parsedData.push({ categoryId, categoryName });
    console.log(parsedData);

    fs.writeFile(
      "./data/category.json",
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
