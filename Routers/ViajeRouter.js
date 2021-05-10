const router = require("express").Router();
const {
  buscarViajePorId,
  agregarViaje,
  modificarViaje,
  borrarViaje,
  listarViajes,
} = require("../Controladores/ViajeABM.js");

router.get("/:id", buscarViajePorId);
router.post("/", agregarViaje);
router.put("/:id", modificarViaje);
router.delete("/:id", borrarViaje);
router.get("/", listarViajes);

module.exports = router;
