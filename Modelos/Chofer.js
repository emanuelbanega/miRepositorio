const { model, Schema } = require("mongoose");
const choferSchema = new Schema({
  nombre: String,
  apellido: String,
  mail: String,
  direccion: String,
  numeroDeContacto: Number,
  contraseña: String,
});
const Chofer = model("Chofer", choferSchema);
choferSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = Chofer;
