const models = require("../models/data-models");
const {
  DataViewModel,
} = require("../models/view-models/data-view-model");
const { NotFound } = require("../utils/errors");
const Model = models.Data;

const upsert = async (data) => {
  console.log(data);
  const item = await Model.findOne(data);
  console.log(item);
  if (item == null) {
    const model = await Model.createNew(data);
    const savedItem = await model.save();
    return savedItem._id;
  }
  return "Already exists";
};

const getAll = async () => {
  console.log("getALL");
  const items = await Model.find();
  console.log(items);
  let viewModels = items.map((item) => DataViewModel.convert(item));
  return viewModels;
};

const getBySku = async (sku) => {
  const item = await Model.findOne({sku});
  let viewModels = DataViewModel.convert(item);
  return viewModels;
};

module.exports = {
  upsert,
  getAll,
  getBySku,
};
