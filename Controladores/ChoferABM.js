const Chofer = require("../Modelos/Chofer.js");

const buscarChoferPorId = (req, res) => {
  const { id } = req.params;
  Chofer.findById(id).then((result) => {
    res.json(result);
  });
};

const agregarChofer = (req, res) => {
  const dataChofer = req.body;
  if (!dataChofer) {
    return res.status(404).end();
  }
  const {
    nombre,
    apellido,
    mail,
    direccion,
    numeroDeContacto,
    contraseña,
  } = dataChofer;
  const nuevoChofer = new Chofer({
    nombre,
    apellido,
    mail,
    direccion,
    numeroDeContacto,
    contraseña,
  });
  nuevoChofer.save().then((result) => {
    console.log(result);
  });
};

const modificarChofer = (req, res) => {
  const { id } = req.params;
  const choferActualizado = req.body;
  if (!choferActualizado) {
    res.status(404).end();
  }
  const {
    nombre,
    apellido,
    mail,
    direccion,
    numeroDeContacto,
    contraseña,
  } = choferActualizado;
  const chofer = {
    nombre,
    apellido,
    mail,
    direccion,
    numeroDeContacto,
    contraseña,
  };
  Chofer.findByIdAndUpdate(id, chofer, { new: true }).then((result) => {
    console.log(result);
  });
};

const borrarChofer = (req, res) => {
  const { id } = req.params;
  Chofer.findByIdAndRemove(id).then((result) => {
    console.log(result);
  });
};

const listarChoferes = (req, res) => {
  Chofer.find({}).then((dataChoferes) => {
    res.json(dataChoferes);
  });
};

module.exports = {
  buscarChoferPorId,
  agregarChofer,
  modificarChofer,
  borrarChofer,
  listarChoferes,
};
