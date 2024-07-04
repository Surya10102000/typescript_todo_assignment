
import express from 'express'
const app = express();
import mongoose from "mongoose"
const port = 3000;
import authRoutes from "./routes/auth.js";
import todoRoutes from "./routes/todo.js";
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

mongoose.connect('mongodb+srv://sfrost488:lFHjlaWEYOyISV6A@cluster0.qfuag7b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { dbName: "courses" });
