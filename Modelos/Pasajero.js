const { model, Schema } = require("mongoose");
const pasajeroSchema = new Schema({
  nombre: String,
  apellido: String,
  dni: Number,
  email: String,
  contraseña: String,
  fechaDeNacimiento: String,
  plan: Boolean,
});
const Pasajero = model("Pasajero", pasajeroSchema);
pasajeroSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = Pasajero;
