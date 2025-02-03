import  morgan  from 'morgan';
import express from "express";
import { config } from "dotenv";
import appRouter from "./routes/index.js";
import cors from "cors";

import cookieParser from "cookie-parser";

config();

const app = express();

// Middlewares

// const cors = require('cors')
// const corsOption = {
//     origin: ['http://localhost:5173'],
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
// }
// app.use(cors(corsOption));

app.use(cors({ origin: ['http://localhost:5173'], credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

// Remove it in production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;