const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config({ path: "./cofig.env" });

const coController = require("../controllers/co");
const no2Controller = require("../controllers/no2");
const hcController = require("../controllers/hc");
const pm10Controller = require("../controllers/pm10");
const pm25Controller = require("../controllers/pm25");
const energiaController = require("../controllers/energia");
const combustibleController = require("../controllers/combustible");
const consumoController = require("../controllers/consumo");
const totalco2Controller = require("../controllers/totalco2");
const camarasController = require("../controllers/camaraszbe");
const contaminacionZonaController = require("../controllers/contaminacion_zona");
const contaminacionCamarasController = require("../controllers/contaminacion_camaras");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/co", coController.getCo);
app.post("/api/co", coController.createCO);
app.put("/api/co/:id", coController.updateCo);
app.delete("/api/co/:id", coController.deleteCo);

// Rutas para NO2
app.get("/api/no2", no2Controller.getNo2);
app.post("/api/no2", no2Controller.createNo2);
app.put("/api/no2/:id", no2Controller.updateNo2);
app.delete("/api/no2/:id", no2Controller.deleteNo2);

// Rutas para HC
app.get("/api/hc", hcController.getHc);
app.post("/api/hc", hcController.createHc);
app.put("/api/hc/:id", hcController.updateHc);
app.delete("/api/hc/:id", hcController.deleteHc);

// Rutas para PM10
app.get("/api/pm10", pm10Controller.getPm10);
app.post("/api/pm10", pm10Controller.createPm10);
app.put("/api/pm10/:id", pm10Controller.updatePm10);
app.delete("/api/pm10/:id", pm10Controller.deletePm10);

// Rutas para PM25
app.get("/api/pm25", pm25Controller.getPm25);
app.post("/api/pm25", pm25Controller.createPm25);
app.put("/api/pm25/:id", pm25Controller.updatePm25);
app.delete("/api/pm25/:id", pm25Controller.deletePm25);

// Rutas para Energia
app.get("/api/energia", energiaController.getEnergia);
app.post("/api/energia", energiaController.createEnergia);
app.put("/api/energia/:id", energiaController.updateEnergia);
app.delete("/api/energia/:id", energiaController.deleteEnergia);

// Rutas para Combustible
app.get("/api/combustible", combustibleController.getCombustible);
app.post("/api/combustible", combustibleController.createCombustible);
app.put("/api/combustible/:id", combustibleController.updateCombustible);
app.delete("/api/combustible/:id", combustibleController.deleteCombustible);

// Rutas para Consumo
app.get("/api/consumo", consumoController.getConsumo);
app.post("/api/consumo", consumoController.createConsumo);
app.put("/api/consumo/:id", consumoController.updateConsumo);
app.delete("/api/consumo/:id", consumoController.deleteConsumo);

// Rutas para TotalCo2
app.get("/api/totalco2", totalco2Controller.gettotalCo2);
app.post("/api/totalco2", totalco2Controller.createtotalCo2);
app.put("/api/totalco2/:id", totalco2Controller.updatetotalCo2);
app.delete("/api/totalco2/:id", totalco2Controller.deletetotalCo2);

// Rutas para Camaras
app.get("/api/camaras", camarasController.getCamaras);
app.post("/api/camaras", camarasController.createCamaras);
app.put("/api/camaras/:id", camarasController.updateCamaras);
app.delete("/api/camaras/:id", camarasController.deleteCamaras);

//Ruta para el get Contaminación Zona
app.get(
  "/api/contaminacionzona",
  contaminacionZonaController.getContaminacionZona
);

//Rutas para Contaminación cámaras
app.get(
  "/api/contaminacioncamaras",
  contaminacionCamarasController.getContaminacionCamaras
);
app.post(
  "/api/contaminacioncamaras",
  contaminacionCamarasController.createContaminacionCamaras
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
