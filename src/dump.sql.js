const { Client } = require("pg");
const fs = require("fs");
const path = require("path");
const config = require("./config/config");

// Database connection configuration
let client = new Client({
	user: config.DB_USER,
	host: config.DB_HOST,
	database: config.DB_DATABASE_NAME,
	password: config.DB_PASSWORD,
	port: config.DB_PORT,
});

console.log("dump.sql.js");
console.log("DB_USER, DB_HOST, DB_DATABASE_NAME, DB_PASSWORD, DB_PORT");
console.log(
	config.DB_USER,
	config.DB_HOST,
	config.DB_DATABASE_NAME,
	config.DB_PASSWORD,
	config.DB_PORT,
);

// Path to your SQL file
const sqlFilePath = path.join(__dirname, "dump.sql");

// Read the SQL file
const sqlFileContent = fs.readFileSync(sqlFilePath, "utf8");

// Connect to the database and execute the SQL commands
async function runSql() {
	try {
		await client.connect();
		console.log("Connected to the database.");

		// Split the file into individual SQL commands
		// const sqlCommands = sqlFileContent.split(';').filter(command => command.trim() !== '');

		await client.query(sqlFileContent);
		// Execute each SQL command
		// for (const command of sqlCommands) {
		//     await client.query(command);
		//     console.log(`Executed: ${command}`);
		// }

		console.log("All SQL commands executed successfully.");
	} catch (err) {
		console.error("Error executing SQL commands:", err);
		// setTimeout(() => {
		// 	client = new Client({
		// 		user: config.DB_USER,
		// 		host: config.DB_HOST,
		// 		database: config.DB_DATABASE_NAME,
		// 		password: config.DB_PASSWORD,
		// 		port: config.DB_PORT,
		// 	});
		// 	runSql();
		// }, 1000);
	} finally {
		await client.end();
		console.log("Disconnected from the database.");
	}
}

runSql();
