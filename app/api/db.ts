import mysql from "mysql2";

const DB = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "yc_directory",
});

(async () => {
  await DB.connect();
})();

export default DB;
