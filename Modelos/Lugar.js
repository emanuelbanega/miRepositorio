const { model, Schema } = require("mongoose");
const lugarSchema = new Schema({ nombre: String, provincia: String });
const Lugar = model("Lugar", lugarSchema);
lugarSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});
module.exports = Lugar;
