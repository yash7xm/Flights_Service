const express = require("express");

const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json()); // does the body parser stuff
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
  const {City, Airport} = require('./models');
  const delhi = await City.findByPk(1, {include: {model: Airport}});
  console.log(delhi);
  // const airport1 = await Airport.create({name: 'Delhi Airport 1', code: 'DEL', cityId: 1});
  // const airport2 = await Airport.create({name: 'Delhi Airport 2', code: 'DEL'});
  const airportsInDel = await delhi.getAirports();
  console.log(airportsInDel);
});
