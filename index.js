const { sequelize } = require("./models");

const app = require("./app");

const PORT = 8080;

app.use("/", (req, res) => res.send("Welcome"));

const startServer = async () => {
  // await sequelize.drop();
  // await sequelize.sync({ force: true });
  try {
    await sequelize.authenticate();
    console.log(`🗄️  connected to database ✅`);
  } catch (error) {
    console.log("Unable to connect to database");
  }
  app.listen(PORT, () => {
    console.log(`🎧 listening on port ${PORT} ✅`);
  });
};

startServer();
