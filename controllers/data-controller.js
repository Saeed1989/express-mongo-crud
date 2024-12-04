/* eslint-disable no-undef */
const express = require("express");
const { getAll, getBySku, upsert } = require("../services/data-service");
const { NotFound } = require("../utils/errors");
const cors = require("cors");

const router = express.Router();

const getHandler = async (req, res, next) => {
  try {
    console.log("user:", req.user);
    const items = await getAll();
    const result = {
      data: items,
      total: items.length,
      success: true,
    };
    res.status(200).send(result);
  } catch (error) {
    return next(error, req, res);
  }
};

const getBySkuHandler = async (req, res, next) => {
  try {
    const parentSku = req.params.dataSku;
    const item = await getBySku(parentSku);
    if (item) {
      res.status(200).send(item);
    } else {
      throw new NotFound("Product not found by the id: " + parentSku);
    }
  } catch (error) {
    return next(error, req, res);
  }
};

const putHandler = async (req, res, next) => {
  try {
    const body = req.body;
    console.log(body);
    const id = await upsert(body);
    res.status(200).send(id);
  } catch (error) {
    return next(error, req, res);
  }
};

router.put("/", putHandler);
router.get("/:dataSku", cors(), getBySkuHandler);
router.get("/", cors(), getHandler);

module.exports = router;
