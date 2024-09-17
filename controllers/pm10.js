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

exports.getPm10 = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.pm10");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createPm10 = async (req, res) => {
  const { id_zona, valor_actual, valor_limite, fecha } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO public.pm10 (id_zona, valor_actual, valor_limite, fecha) VALUES ($1, $2, $3, $4) RETURNING *",
      [id_zona, valor_actual, valor_limite, fecha]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updatePm10 = async (req, res) => {
  const { id } = req.params;
  const { id_zona, valor_actual, valor_limite, fecha } = req.body;
  try {
    const result = await pool.query(
      "UPDATE public.pm10 SET id_zona = $1, valor_actual = $2, valor_limite = $3, fecha = $4 WHERE id = $5 RETURNING *",
      [id_zona, valor_actual, valor_limite, fecha, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deletePm10 = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM public.pm10 WHERE id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
