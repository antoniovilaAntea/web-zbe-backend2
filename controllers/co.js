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

exports.getCo = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.co");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createCO = async (req, res) => {
  const { id_zona, valor_actual, valor_limite, fecha } = req.body;
  console.log("Datos recibidos: " + req.body);
  try {
    const result = await pool.query(
      "INSERT INTO public.co (id_zona, valor_actual, valor_limite, fecha) VALUES ($1, $2, $3, $4) Returning *",
      [id_zona, valor_actual, valor_limite, fecha]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateCo = async (req, res) => {
  const { id } = req.params;
  const { idZona, valorActual, valorLimite, fecha } = req.body;
  try {
    const result = await pool.query(
      "UPDATE public.co SET id_zona = $1, valor_actual = $2, valor_limite = $3, fecha = $4 WHERE id = $5 Returning *",
      [idZona, valorActual, valorLimite, fecha, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteCo = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM public.co WHERE id = $1", [id]);
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
