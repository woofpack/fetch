import "./env";
import cors from "cors";
import helmet from "helmet";
import express from "express";
import bodyParser from "body-parser";
import { apiRouter } from "./routes";
import db from "./db";

const app = express();

const { PORT = 3000 } = process.env;

db();
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.disable("x-powered-by");

app.use("/api", apiRouter);

app.listen(PORT, () => console.log("> fetch listening"));
