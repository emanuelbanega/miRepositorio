const { model, Schema } = require("mongoose");
const insumoSchema = new Schema({
  nombre: String,
  tipo: String,
  precio: Number,
});
const Insumo = model("Insumo", insumoSchema);
insumoSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = Insumo;
