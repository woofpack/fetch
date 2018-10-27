import { Router } from "express";
import spot from "../controllers/spot";
import fetch from "../controllers/fetch";

const apiRouter = Router();

apiRouter.get("/fetch", fetch.read);

apiRouter.post("/spot", spot.create);

export { apiRouter };
