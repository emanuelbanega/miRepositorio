const router = require("express").Router();
const {
  buscarInsumoPorId,
  agregarInsumo,
  modificarInsumo,
  borrarInsumo,
  listarInsumos,
} = require("../Controladores/InsumoABM.js");

router.get("/:id", buscarInsumoPorId);
router.post("/", agregarInsumo);
router.put("/:id", modificarInsumo);
router.delete("/:id", borrarInsumo);
router.get("/", listarInsumos);

module.exports = router;
