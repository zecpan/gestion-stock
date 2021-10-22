module.exports = {
  apps: [
    {
      name: "GS_Server",
      script: "build/back/src/server.js",
      // instances: "max",
      // exec_mode: "cluster",
      env: {
        GESTION_STOCK_PORT: 3000,
        GESTION_STOCK_DBTYPE: "mongodb",
        GESTION_STOCK_MONGO_URI: "mongodb://localhost/gestion-stock",
      },
      env_production: {
        // to be filled by the prod guy.
        GESTION_STOCK_PORT: 4444,
      },
    },
  ],
};
