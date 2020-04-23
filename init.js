import app from "./app";

const port = 4000;

const handleListending = () => console.log('Listening on: http://localhost:${port}');

app.listen(port, handleListending);