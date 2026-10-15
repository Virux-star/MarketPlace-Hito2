require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT) || 5432,
});

async function probarConexion() {
  try {
    const resultado = await pool.query(
      "SELECT COUNT(*) FROM users"
    );

    console.log("Conexión exitosa a PostgreSQL");
    console.log("Usuarios:", resultado.rows[0].count);
  } catch (error) {
    console.error("Error de conexión:", error.message);
  } finally {
    await pool.end();
  }
}

probarConexion();