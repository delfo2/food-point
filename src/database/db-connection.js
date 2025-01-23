const { Pool } = require("pg");
const dotenv = require("dotenv");
const {
	DB_HOST,
	DB_DATABASE_NAME,
	DB_PASSWORD,
	DB_PORT,
	DB_USER,
} = require("../config/config");
dotenv.config();

console.log("db-connection.js");
console.log("DB_USER, DB_HOST, DB_DATABASE_NAME, DB_PASSWORD DB_PORT");
console.log(DB_USER, DB_HOST, DB_DATABASE_NAME, DB_PASSWORD, DB_PORT);
const dBConnection = new Pool({
	user: DB_USER,
	host: DB_HOST,
	database: DB_DATABASE_NAME,
	password: DB_PASSWORD,
	port: DB_PORT,
});

module.exports = dBConnection;
