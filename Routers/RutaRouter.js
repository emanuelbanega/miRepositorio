const router = require("express").Router();
const {
  buscarRutaPorId,
  agregarRuta,
  modificarRuta,
  borrarRuta,
  listarRutas,
} = require("../Controladores/RutaAMB.js");

router.get("/:id", buscarRutaPorId);
router.post("/", agregarRuta);
router.put("/:id", modificarRuta);
router.delete("/:id", borrarRuta);
router.get("/", listarRutas);

module.exports = router;
