import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//console.log(process.env.DB_URL);

mongoose.connect(
  process.env.DB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const dbConn = mongoose.connection;

const handleDbOpen = () => console.log("Connected to DB");
const handleDbError = error => console.log(`Error on DB Connection:${error}`);


dbConn.once("open", handleDbOpen);
dbConn.on("error", handleDbError);