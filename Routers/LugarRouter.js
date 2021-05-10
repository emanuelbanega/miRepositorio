const router = require("express").Router();
const {
  buscarLugarPorId,
  agregarLugar,
  modificarLugar,
  borrarLugar,
  listarLugares,
} = require("../Controladores/LugarABM.js");

router.get("/:id", buscarLugarPorId);
router.post("/", agregarLugar);
router.put("/:id", modificarLugar);
router.delete("/:id", borrarLugar);
router.get("/", listarLugares);

module.exports = router;
