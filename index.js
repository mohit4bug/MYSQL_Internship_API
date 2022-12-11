import express from 'express';
import mysql from 'mysql';
import authRoute from "./routes/Auth.js";
import userRoute from "./routes/User.js";
import personalRoute from "./routes/Personal.js";
import educationalRoute from "./routes/Educational.js";
import skillsRoute from "./routes/Skills.js";
import cookieParser from 'cookie-parser';
const app = express();

export const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "mohit6367",
    database: 'internship',
})

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/personal", personalRoute);
app.use("/skills", skillsRoute);
app.use("/educational", educationalRoute);







app.listen(8000, () => {
    console.log("server is running");
});