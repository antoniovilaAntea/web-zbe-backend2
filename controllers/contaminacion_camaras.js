const { Pool } = require("pg");
require("dotenv").config({ path: "../config.env" });

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false,
  },
});

exports.getContaminacionCamaras = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM public.contaminacion_camaras"
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createContaminacionCamaras = async (req, res) => {
  const { id_zona, fecha, id_camara, contaminante, valor } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO public.contaminacion_camaras (id_zona, fecha, id_camara, contaminante, valor) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [id_zona, fecha, id_camara, contaminante, valor]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateContaminacionCamaras = async (req, res) => {
  const { id } = req.params;
  const { valor } = req.body;
  try {
    const result = await pool.query(
      "UPDATE public.contaminacion_camaras SET valor = $1 WHERE id = $2 RETURNING *",
      [valor, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteContaminacionCamaras = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM public.contaminacion_camaras WHERE id = $1", [
      id,
    ]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
