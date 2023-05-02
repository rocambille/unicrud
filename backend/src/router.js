const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const unicornControllers = require("./controllers/unicornControllers");

router.get("/unicorns", unicornControllers.browse);
router.get("/unicorns/:id", unicornControllers.read);
router.put("/unicorns/:id", unicornControllers.edit);
router.post("/unicorns", unicornControllers.add);
router.delete("/unicorns/:id", unicornControllers.destroy);

module.exports = router;
