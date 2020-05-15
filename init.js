import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

const PORT = process.env.PORT || 4000; // process.env.PORT을 찾지 못하면 포트 4000으로 접속

const handleListending = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListending);