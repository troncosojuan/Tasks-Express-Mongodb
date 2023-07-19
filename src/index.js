import { PORT } from "./config";
import app from "./app";
import "./database.js"


app.listen(PORT);

console.log("PORT: ", PORT);
