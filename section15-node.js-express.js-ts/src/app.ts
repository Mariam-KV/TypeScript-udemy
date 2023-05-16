import express from "express";
import router from "./routes/todos";
let app = express();

app.use("/todos",router)
app.listen(300);
