class DataViewModel {
  static convert = (category) => {
    const viewModel = Object.create(category);
    const { __v, ...rest } = JSON.parse(JSON.stringify(viewModel));
    return rest;
  };
}

module.exports.DataViewModel = DataViewModel;
