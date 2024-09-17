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

exports.getEnergia = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM public.energiamwh");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.createEnergia = async (req, res) => {
  const { id_zona, valor, fecha } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO public.energiamwh (id_zona,valor, fecha) VALUES ($1, $2, $3) RETURNING *",
      [id_zona, valor, fecha]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.updateEnergia = async (req, res) => {
  const { id } = req.params;
  const { valor } = req.body;
  try {
    const result = await pool.query(
      "UPDATE public.energiamwh SET valor = $1 WHERE id = $2 RETURNING *",
      [valor, id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.deleteEnergia = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query("DELETE FROM public.energiamwh WHERE id = $1", [id]);
    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};
