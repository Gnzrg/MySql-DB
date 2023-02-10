const { json } = require("express");
const fs = require("fs");
const uuid = require("uuid");

const dataFile = process.cwd() + "/data/products.json";

exports.getAll = (request, response) => {
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const savedData = JSON.parse(data);

    return response.json({ status: true, result: savedData });
  });
};

exports.create = (request, response) => {
  const {
    categoryId,
    productName,
    description,
    date,
    categoryName,
    price,
    isTrending,
    img,
    thumbImg,
  } = request.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return response.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const newObj = {
      productId: uuid.v4(),
      categoryId,
      productName,
      categoryName,
      price,
      isTrending,
      img,
      description,
      date,
      thumbImg,
    };

    parsedData.push(newObj);

    fs.writeFile(dataFile, JSON.stringify(parsedData), (writeErr) => {
      if (writeErr) {
        return response.json({ status: false, message: writeErr });
      }

      return response.json({ status: true, result: parsedData });
    });
  });
};

exports.update = (req, res) => {
  const {
    categoryId,
    productName,
    categoryName,
    price,
    isTrending,
    productId,
  } = req.body;
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }

    const parsedData = JSON.parse(data);

    const updateData = parsedData.map((productObj) => {
      if (productObj.productId == productId) {
        return {
          ...productObj,
          categoryId,
          productName,
          categoryName,
          price,
          isTrending,
        };
      } else {
        return productObj;
      }
    });

    fs.writeFile(dataFile, JSON.stringify(updateData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: false, message: writeErr });
      }

      return res.json({ status: true, result: updateData });
    });
  });
};

exports.delete = (req, res) => {
  const { id } = req.params;
  console.log(id);
  fs.readFile(dataFile, "utf-8", (readErr, data) => {
    if (readErr) {
      return res.json({ status: false, message: readErr });
    }
    const parsedData = JSON.parse(data);
    const deletedData = parsedData.filter((e) => e.productId != id);
    fs.writeFile(dataFile, JSON.stringify(deletedData), (writeErr) => {
      if (writeErr) {
        return res.json({ status: false, message: writeErr });
      }
      return res.json({ status: true, result: deletedData });
    });
  });
};
// exports.get = (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   fs.readFile(dataFile, "utf-8", (readErr, data) => {
//     if (readErr) {
//       return res.json({ status: false, message: readErr });
//     }
//     const parsedData = JSON.parse(data);
//     const getData = parsedData.filter((e) => e.id == id);
//     fs.writeFile(dataFile, JSON.stringify(getData), (writeErr) => {
//       if (writeErr) {
//         return res, json({ status: false, message: writeErr });
//       }
//       return res.json({ status: true, result: getData });
//     });
//   });
// };
