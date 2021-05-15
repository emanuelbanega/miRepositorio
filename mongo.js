const mongoose = require("mongoose");
const password = require("./credenciales.js");
const connectionString = `mongodb+srv://emanuelbanega:${password}@cluster0.0u15s.mongodb.net/combi19db?retryWrites=true&w=majority`;
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
