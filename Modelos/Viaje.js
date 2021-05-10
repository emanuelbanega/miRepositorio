const { model, Schema } = require("mongoose");
const viajeSchema = new Schema({
  ruta: { type: Schema.Types.ObjectId, ref: "Ruta" },
  cantidadAsientos: Number,
  fecha: Date,
  precio: Number,
});
const Viaje = model("Viaje", viajeSchema);
viajeSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = Viaje;
