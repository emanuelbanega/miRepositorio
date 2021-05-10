const Insumo = require("../Modelos/Insumo.js");

const buscarInsumoPorId = (req, res) => {
  const { id } = req.params;
  Insumo.findById(id).then((result) => {
    res.json(result);
  });
};

const agregarInsumo = (req, res) => {
  const dataInsumo = req.body;
  if (!dataInsumo) {
    return res.status(404).end();
  }
  const { nombre, tipo, precio } = dataInsumo;
  const nuevoInsumo = new Insumo({
    nombre,
    tipo,
    precio,
  });
  nuevoInsumo.save().then((result) => {
    console.log(result);
  });
};

const modificarInsumo = (req, res) => {
  const { id } = req.params;
  const insumoActualizado = req.body;
  if (!insumoActualizado) {
    res.status(404).end();
  }
  const { nombre, tipo, precio } = insumoActualizado;
  const insumo = {
    nombre,
    tipo,
    precio,
  };
  Insumo.findByIdAndUpdate(id, insumo, { new: true }).then((result) => {
    console.log(result);
  });
};

const borrarInsumo = (req, res) => {
  const { id } = req.params;
  Insumo.findByIdAndRemove(id).then((result) => {
    console.log(result);
  });
};

const listarInsumos = (req, res) => {
  Insumo.find({}).then((dataInsumos) => {
    res.json(dataInsumos);
  });
};

module.exports = {
  buscarInsumoPorId,
  agregarInsumo,
  modificarInsumo,
  borrarInsumo,
  listarInsumos,
};
