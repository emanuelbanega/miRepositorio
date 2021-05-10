const Ruta = require("../Modelos/Ruta.js");
const buscarRutaPorId = (req, res) => {
  const { id } = req.params;
  Ruta.findById(id).then((result) => {
    res.json(result);
  });
};

const agregarRuta = (req, res) => {
  const dataRuta = req.body;
  if (!dataRuta) {
    return res.status(404).end();
  }
  const { origen, destino, combi, horario, kilometros } = dataRuta;
  const nuevaRuta = new Ruta({
    origen,
    destino,
    combi,
    horario,
    kilometros,
  });
  nuevaRuta.save().then((result) => {
    console.log(result);
  });
};

const modificarRuta = (req, res) => {
  const { id } = req.params;
  const rutaActualizada = req.body;
  if (!rutaActualizada) {
    res.status(404).end();
  }
  const { origen, destino, combi, horario, kilometros } = rutaActualizada;
  const ruta = {
    origen,
    destino,
    combi,
    horario,
    kilometros,
  };
  Ruta.findByIdAndUpdate(id, ruta, { new: true }).then((result) => {
    console.log(result);
  });
};

const borrarRuta = (req, res) => {
  const { id } = req.params;
  Ruta.findByIdAndRemove(id).then((result) => {
    console.log(result);
  });
};

const listarRutas = (req, res) => {
  Ruta.find({})
    .populate("origen", { nombre: 1, provincia: 1, _id: 0 })
    .populate("destino", { nombre: 1, provincia: 1, _id: 0 })
    .populate("combi", {
      patente: 1,
      modelo: 1,
      cantidadDeAsientos: 1,
      chofer: 1,
      tipoDeCombi: 1,
      _id: 0,
    })
    .then((dataRutas) => {
      res.json(dataRutas);
    });
};

module.exports = {
  buscarRutaPorId,
  agregarRuta,
  modificarRuta,
  borrarRuta,
  listarRutas,
};
