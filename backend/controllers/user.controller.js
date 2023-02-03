const { json } = require("express");
const fs = require("fs");
const uuid = require("uuid");
const dataFile = process.cwd() + "/data/user.json";

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
  const { firstName, lastName, userName, password, userType } = req.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const parsedData = JSON.parse(data);
    const newObj = {
      userId: uuid.v4(),
      firstName,
      lastName,
      userName,
      password,
      userType,
    };
    parsedData.push(newObj);
    fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: false, message: writeErr });
      }
      return res.json({ status: true, result: parsedData });
    });
  });
};
exports.update = (req, res) => {
  const { firstName, lastName, userName, password, userType } = req.body;
  const { id } = req.params;

  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const parsedData = JSON.parse(data);
    const updateData = parsedData.map((user) => {
      if (user.userId == id) {
        return { ...user, firstName, lastName, userName, password, userType };
      } else {
        return user;
      }
    });

    fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: false, message: readErr });
      }
      console.log(updateData);

      return res.json({ value: "HAHAH" });
      //   return res.json({ status: true, result: updateData });
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
    const deletedData = parsedData.filter((users) => users.userId != id);
    fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: false, message: writeErr });
      }
      return res.json({ status: true, result: deletedData });
    });
    // res.json({status: true , result  : data })
  });
};
