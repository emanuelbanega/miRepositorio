const { model, Schema } = require("mongoose");
const administradorSchema = new Schema({
  nombre: String,
  apellido: String,
  mail: String,
  contraseña: String,
});
const Administrador = model("Administrador", administradorSchema);
administradorSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = Administrador;
