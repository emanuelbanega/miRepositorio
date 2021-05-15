const express = require("express");
const app = express();
const cors = require("cors");
require("./mongo.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.use("/api/combis", require("./Routers/CombiRouter.js"));
app.use("/api/choferes", require("./Routers/ChoferRouter.js"));
app.use("/api/lugares", require("./Routers/LugarRouter.js"));
app.use("/api/insumos", require("./Routers/InsumoRouter.js"));
app.use("/api/pasajeros", require("./Routers/PasajeroRouter.js"));
app.use("/api/rutas", require("./Routers/RutaRouter.js"));
app.use("/api/viajes", require("./Routers/ViajeRouter.js"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log("Server on port " + PORT);
});
