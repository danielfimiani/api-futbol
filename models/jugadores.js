const pool = require("./../utils/db");
const T_JUGADORES = "jugadores";

const get = (conditions = true) =>
  pool
    .query("SELECT * FROM ?? WHERE ?", [T_JUGADORES, conditions])
    .then((result) => result)
    .catch((e) => e);

const single = async (id) => {
  const query = "SELECT * FROM ?? as j where j.id_jugador = ?";
  const params = [T_JUGADORES, id];
  return await pool.query(query, params);
};

module.exports = { get, single };
