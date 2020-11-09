const pool = require("./../utils/db");
const T_PARTIDOS = "partidos";
const T_EQUIPOS = "equipos";

const get = (conditions = true) =>
  pool
    .query("SELECT * FROM ?? WHERE ?", [T_PARTIDOS, conditions])
    .then((result) => result)
    .catch((e) => e);

const single = async (id) => {
  const query = "SELECT * FROM ?? as p where p.id_partido = ?";
  const params = [T_PARTIDOS, id];
  return await pool.query(query, params);
};

const ultimoPartido = async () => {
  const query = "SELECT * from ?? where id_partido = (Select MAX(id_partido) from ??)";
  const params = [T_PARTIDOS, T_PARTIDOS];
  return await pool.query(query, params);
};

const ByDate = async (fec_desde, fec_hasta) => {
  const query = "SELECT * from ?? where ts_create >= ? and ts_create <= ?";
  const params = [T_PARTIDOS, fec_desde, fec_hasta];
  return await pool.query(query, params);
};

const newPartido = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [T_PARTIDOS, obj];
  return await pool.query(query, params);
};

const puntosbyDate = async (fec_desde, fec_hasta) => {
  const query = "SELECT SUM(puntaje) as Puntaje FROM ?? where ts_create BetWeen ? and ?";
  const params = [T_PARTIDOS, fec_desde, fec_hasta];
  return await pool.query(query, params);
};

const masGoles = async () => {
  const query = `
  SELECT txt_nombre from ?? where 
  id_equipo = 
  (SELECT id_equipo from ??
  GROUP BY id_equipo
  HAVING SUM(gol_visitante) = (
    SELECT MAX(goles)
    FROM 
    (
      SELECT id_equipo, SUM(gol_visitante) as goles FROM ??
      GROUP BY id_equipo
    ) a
  ))
  `;
  const params = [T_EQUIPOS, T_PARTIDOS, T_PARTIDOS];
  return await pool.query(query, params);
};

module.exports = { get, single, ByDate, ultimoPartido, newPartido, puntosbyDate, masGoles };
