const router = require("express").Router();
const {
  buscarPasajeroPorId,
  agregarPasajero,
  modificarPasajero,
  borrarPasajero,
  listarPasajeros,
} = require("../Controladores/PasajeroABM.js");

router.get("/:id", buscarPasajeroPorId);
router.post("/", agregarPasajero);
router.put("/:id", modificarPasajero);
router.delete("/:id", borrarPasajero);
router.get("/", listarPasajeros);

module.exports = router;
