// Connect to MongoDB using Mongoose
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
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