require("dotenv").config({ quiet: true });

const app = require("./app");
const connectDB = require("./config/db");

const PORT = process.env.PORT || 8000;

// Connect to MongoDB first so the server never accepts requests it can't serve.
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Backend running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("Failed to connect to MongoDB:", err.message);
        process.exit(1);
    });
