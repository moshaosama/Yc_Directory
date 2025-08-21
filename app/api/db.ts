import mysql from "mysql2/promise";

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
