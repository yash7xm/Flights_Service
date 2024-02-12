const express = require("express");

const { ServerConfig, Logger } = require("./config");
const apiRoutes = require("./routes");

const app = express();

app.use(express.json()); // does the body parser stuff
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
