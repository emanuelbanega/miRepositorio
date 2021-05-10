const { model, Schema } = require("mongoose");
const rutaSchema = new Schema({
  origen: { type: Schema.Types.ObjectId, ref: "Lugar" },
  destino: { type: Schema.Types.ObjectId, ref: "Lugar" },
  combi: { type: Schema.Types.ObjectId, ref: "Combi" },
  horario: String,
  kilometros: Number,
});
const Ruta = model("Ruta", rutaSchema);
rutaSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = Ruta;
