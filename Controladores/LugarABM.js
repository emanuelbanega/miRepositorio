const Lugar = require("../Modelos/Lugar.js");

const buscarLugarPorId = (req, res) => {
  const { id } = req.params;
  Lugar.findById(id).then((result) => {
    res.json(result);
  });
};

const agregarLugar = (req, res) => {
  const dataLugar = req.body;
  if (!dataLugar) {
    return res.status(404).end();
  }
  const { nombre, provincia } = dataLugar;
  const nuevoLugar = new Lugar({
    nombre,
    provincia,
  });
  nuevoLugar.save().then((result) => {
    console.log(result);
  });
};

const modificarLugar = (req, res) => {
  const { id } = req.params;
  const lugarActualizado = req.body;
  if (!lugarActualizado) {
    res.status(404).end();
  }
  const { nombre, provincia } = lugarActualizado;
  const lugar = {
    nombre,
    provincia,
  };
  Lugar.findByIdAndUpdate(id, lugar, { new: true }).then((result) => {
    console.log(result);
  });
};

const borrarLugar = (req, res) => {
  const { id } = req.params;
  Lugar.findByIdAndRemove(id).then((result) => {
    console.log(result);
  });
};

const listarLugares = (req, res) => {
  Lugar.find({}).then((dataLugar) => {
    res.json(dataLugar);
  });
};

module.exports = {
  buscarLugarPorId,
  agregarLugar,
  modificarLugar,
  borrarLugar,
  listarLugares,
};
