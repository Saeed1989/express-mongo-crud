const mongoose = require("mongoose");

// schema
const dataSchema = new mongoose.Schema({
  name: { type: String, unique: true, required: true },
  sku: { type: String, required: false },
  description: { type: String, required: false },
  parentSku: { type: String, required: false },
  createdAt: { type: String, required: false },
  updatedAt: { type: String, required: false },
});

dataSchema.index({ name: "text" });

// reference model
const Data = mongoose.model("Data", dataSchema, 'test-data');

Data.createNew = async (data) => {
  data._id = new mongoose.Types.ObjectId();
  const model = new Data(data);
  return model;
};

module.exports = Data;
