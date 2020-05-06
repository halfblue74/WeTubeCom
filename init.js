import "./db";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

import "./models/Video";

const PORT = process.env.PORT || 4000;  //process.env.PORT을 찾지 못하면 포트 4000으로 접속

const handleListending = () => console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListending);