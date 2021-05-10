const router = require("express").Router();
const {
  buscarChoferPorId,
  agregarChofer,
  modificarChofer,
  borrarChofer,
  listarChoferes,
} = require("../Controladores/ChoferABM.js");

router.get("/:id", buscarChoferPorId);
router.post("/", agregarChofer);
router.put("/:id", modificarChofer);
router.delete("/:id", borrarChofer);
router.get("/", listarChoferes);

module.exports = router;