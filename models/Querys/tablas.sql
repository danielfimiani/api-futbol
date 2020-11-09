CREATE TABLE equipos 
(
	id_equipo int NOT NULL AUTO_INCREMENT ,
    txt_nombre VARCHAR(30) NOT NULL,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_equipo)
);
-- listo
CREATE TABLE partidos
(
	id_partido int NOT NULL AUTO_INCREMENT ,
    id_equipo int NOT NULL,
    gol_local int NOT NULL,
    gol_visitante int NOT NULL,
    puntaje int NOT NULL,
    id_figura int NOT NULL, 
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_partido),
    FOREIGN KEY (id_figura) references jugadores(id_jugador)
);
-- listo
CREATE TABLE jugadores 
(
	id_jugador int NOT NULL AUTO_INCREMENT ,
    txt_nombre  VARCHAR(30) NOT NULL,
    id_equipo int NOT NULL ,
    uri_image VARCHAR(300) ,
    ts_create TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ts_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(id_jugador),
    FOREIGN KEY (id_equipo) references equipos(id_equipo)
);