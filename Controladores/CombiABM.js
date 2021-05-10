const Combi = require("../Modelos/Combi.js");

const buscarCombiPorId = (req, res) => {
  const { id } = req.params;
  Combi.findById(id).then((result) => {
    res.json(result);
  });
};

const agregarCombi = (req, res) => {
  const dataCombi = req.body;
  if (!dataCombi) {
    return res.status(404).end();
  }
  const {
    patente,
    modelo,
    cantidadDeAsientos,
    chofer,
    tipoDeCombi,
  } = dataCombi;
  const nuevaCombi = new Combi({
    patente,
    modelo,
    cantidadDeAsientos,
    chofer,
    tipoDeCombi,
  });
  nuevaCombi.save().then((result) => {
    console.log(result);
  });
};

const modificarCombi = (req, res) => {
  const { id } = req.params;
  const combiActualizada = req.body;
  if (!combiActualizada) {
    res.status(404).end();
  }
  const {
    patente,
    modelo,
    cantidadDeAsientos,
    chofer,
    tipoDeCombi,
  } = combiActualizada;
  const combi = {
    patente,
    modelo,
    cantidadDeAsientos,
    chofer,
    tipoDeCombi,
  };
  Combi.findByIdAndUpdate(id, combi, { new: true }).then((result) => {
    console.log(result);
  });
};

const borrarCombi = (req, res) => {
  const { id } = req.params;
  Combi.findByIdAndRemove(id).then((result) => {
    console.log(result);
  });
};

const listarCombis = (req, res) => {
  Combi.find({})
    .populate("chofer", {
      nombre: 1,
      apellido: 1,
      mail: 1,
      direccion: 1,
      numeroDeContacto: 1,
      contraseña: 1,
      _id: 0,
    })
    .then((dataCombis) => {
      res.json(dataCombis);
    });
};

module.exports = {
  buscarCombiPorId,
  agregarCombi,
  modificarCombi,
  borrarCombi,
  listarCombis,
};
