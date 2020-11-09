const pool = require("./../utils/db");
const T_EQUIPOS = "equipos";

const get = (conditions = true) =>
  pool
    .query("SELECT * FROM ?? WHERE ?", [T_EQUIPOS, conditions])
    .then((result) => result)
    .catch((e) => e);

const single = async (id) => {
  const query = "SELECT * FROM ?? as eq where eq.id_equipo = ?";
  const params = [T_EQUIPOS, id];
  return await pool.query(query, params);
};

module.exports = { get, single };
