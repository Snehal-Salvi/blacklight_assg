import mysql from 'mysql';

// Function to create and return the MySQL database connection
function connectToDatabase() {
    const db = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
      });

    return db; // Return the database connection object
}

export default connectToDatabase;
