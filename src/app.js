const express = require("express");
const cookieParser = require("cookie-parser");
const { PORT } = require("./config/config");
const router = require("./routes/router");
const { Client } = require("pg");
const fs = require("fs");
const path = require("path");
const config = require("./config/config");

const app = express();

console.log("app.js");
console.log("DB_USER, DB_HOST, DB_DATABASE_NAME, DB_PASSWORD, DB_PORT");
console.log(
	config.DB_USER,
	config.DB_HOST,
	config.DB_DATABASE_NAME,
	config.DB_PASSWORD,
	config.DB_PORT,
);
// Database connection configuration
let client = new Client({
	user: config.DB_USER,
	host: config.DB_HOST,
	database: config.DB_DATABASE_NAME,
	password: config.DB_PASSWORD,
	port: config.DB_PORT,
});

// Path to your SQL file
const sqlFilePath = path.join(__dirname, 'dump.sql');

// Function to check if the database is initialized
async function isDatabaseInitialized() {
    try {
        // Check for the existence of a specific table or function
        const result = await client.query(`
            SELECT EXISTS (
                SELECT 1
                FROM information_schema.tables
                WHERE table_name = 'event'
            );
        `);
        return result.rows[0].exists; // Returns true if the table exists
    } catch (err) {
        console.error('Error checking database initialization:', err);
        return false;
    }
}

// Function to initialize the database
async function initializeDatabase() {
    try {
        const sqlFileContent = fs.readFileSync(sqlFilePath, 'utf8');
        await client.query(sqlFileContent);
        console.log('Database initialized successfully.');
    } catch (err) {
        console.error('Error initializing database:', err);
    }
}

// Main function to start the server and initialize the database if needed
async function startServer() {
    try {
        await client.connect();
        console.log('Connected to the database.');

        // Check if the database is already initialized
        const isInitialized = await isDatabaseInitialized();
        if (!isInitialized) {
            console.log('Database not initialized. Running initialization script...');
            await initializeDatabase();
        } else {
            console.log('Database already initialized.');
        }

        // Start the Express server
        app.use(express.json());
        app.use(cookieParser());
        app.use(router);

        app.listen(PORT, () => console.log(`Server running on port ${PORT}!`));
    } catch (err) {
        console.error('Error starting server:', err);
    }
}

startServer();