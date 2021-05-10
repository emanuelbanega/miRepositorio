const router = require("express").Router();
const {
  buscarCombiPorId,
  agregarCombi,
  modificarCombi,
  borrarCombi,
  listarCombis,
} = require("../Controladores/CombiABM.js");

router.get("/:id", buscarCombiPorId);
router.post("/", agregarCombi);
router.put("/:id", modificarCombi);
router.delete("/:id", borrarCombi);
router.get("/", listarCombis);

module.exports = router;
