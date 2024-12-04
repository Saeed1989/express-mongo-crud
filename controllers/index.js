const appRoutes = require("./routes");
const healthHandler = require("./health-controller");

const configure = (app) => {
  app.use("/api", appRoutes);
  app.use("/health", healthHandler.healthHandler);
  return app;
};

module.exports = configure;
