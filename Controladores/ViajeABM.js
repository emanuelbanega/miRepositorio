const Viaje = require("../Modelos/Viaje.js");

const buscarViajePorId = (req, res) => {
  const { id } = req.params;
  Viaje.findById(id).then((result) => {
    res.json(result);
  });
};

const agregarViaje = (req, res) => {
  const dataViaje = req.body;
  if (!dataViaje) {
    return res.status(404).end();
  }
  const { ruta, cantidadAsientos, fecha, precio } = dataViaje;
  const nuevoViaje = new Viaje({
    ruta,
    cantidadAsientos,
    fecha,
    precio,
  });
  nuevoViaje.save().then((result) => {
    console.log(result);
  });
};

const modificarViaje = (req, res) => {
  const { id } = req.params;
  const viajeActualizado = req.body;
  if (!viajeActualizado) {
    res.status(404).end();
  }
  const { ruta, cantidadAsientos, fecha, precio } = viajeActualizado;
  const viaje = {
    ruta,
    cantidadAsientos,
    fecha,
    precio,
  };
  Viaje.findByIdAndUpdate(id, viaje, { new: true }).then((result) => {
    console.log(result);
  });
};

const borrarViaje = (req, res) => {
  const { id } = req.params;
  Viaje.findByIdAndRemove(id).then((result) => {
    console.log(result);
  });
};

const listarViajes = (req, res) => {
  Viaje.find({})
    .populate({
      path: "ruta",
      populate: [{ path: "origen" }, { path: "destino" }],
    })
    .then((dataViajes) => {
      res.json(dataViajes);
    });
};

module.exports = {
  buscarViajePorId,
  agregarViaje,
  modificarViaje,
  borrarViaje,
  listarViajes,
};
