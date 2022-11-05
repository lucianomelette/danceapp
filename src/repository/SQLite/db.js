import * as SQLite from "expo-sqlite";

const tableName = "alumnos";

export const openDatabase = () => {
  if (Platform.OS === "web") {
    return {
      transaction: () => {
        return {
          executeSql: () => {},
        };
      },
    };
  }

  const db = SQLite.openDatabase("dance-db.db");
  return db;
}

export const createTable = (tx) => {
  // create table if not exists
  const query = `CREATE OR UPDATE TABLE IF NOT EXISTS ${tableName}(
        id INTEGER PRIMARY KEY NOT NULL
        , nombre TEXT NOT NULL
        , direccion TEXT NOT NULL
    );`;
  tx.executeSql(query);
};

export const getAlumnos = (tx, callback) => {
  try {
    tx.executeSql(
      `SELECT id, nombre, direccion FROM ${tableName}`,
      [],
      (_, { rows }) => { console.log(rows._array); callback(rows._array) }
    );
  } catch (error) {
    console.error(error);
    throw Error("Failed to get alumnos !!!");
  }
};

export const saveAlumno = (tx, alumno, callback) => {
  const insertQuery =
    `INSERT INTO ${tableName} (nombre, direccion) values ` +
    `('${alumno.nombre}', '${alumno.direccion}')`;
  tx.executeSql(insertQuery, null, (_, { insertId }) => callback(insertId));
};

export const deleteAlumno = (tx, id) => {
  const deleteQuery = `DELETE from ${tableName} where id = ${id}`;
  tx.executeSql(deleteQuery);
};

export const deleteTable = async (db) => {
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
};
