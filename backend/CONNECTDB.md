# To connect to MongoDB Database

## Get Access

1. Click on invite link in ucsd email and signup to MongoDB
2. Accept invite to MongoDB Atlas organization (ACM-FA2026)
3. Go to left sidebar, scroll down, and click on security quickstart.
4. Click on username and password box and create a username and password (make sure to know your password)
5. After creating your user scroll down to IP access list and click on "Add My Current IP Address" and then "Add Entry"

## Connect to MongoDB Database

1. Create a .env file and copy the format from .env.example
   - DB_NAME will be the name of the database cluster (Go to Clusters and see the name)
   - DB_USER will be your user name
2. Get the MONGODB_URI
   - Go to Database (sidebar)-> Clusters -> Connect -> Choose a connection method -> Drivers and Client Libraries
   - Choose JavaScript language and Mongoose Client Library
   - Scoll down and copy the URI string starting with mongodb+srv
3. Paste in your .env variables
4. fill in <db_password> with the password you made to create your user
5. Run npm run dev to connect to database!
