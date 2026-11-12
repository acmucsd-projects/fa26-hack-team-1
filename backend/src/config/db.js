// Connect to MongoDB using Mongoose
const mongoose = require('mongoose');

if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
    console.error("MONGODB_URI or DB_NAME is not defined in the environment variables.");
    process.exit(1);
}


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.DB_NAME,// Use the DB_NAME from .env or default to 'main'
            autoCreate: false,
            serverSelectionTimeoutMS: 10000
        });
        console.log(`Database connected successfully: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Database connection error: ${err.message}`);
        throw err;
    }
}


// Call this only when your application terminates
const disconnectDB = async () => {
    await mongoose.connection.close();
}

module.exports = connectDB;
module.exports.disconnectDB = disconnectDB;