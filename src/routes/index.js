import { Router } from "express";
import spot from "../controllers/spot";
import woof from "../controllers/woof";
import fetch from "../controllers/fetch";

const apiRouter = Router();

apiRouter.get("/woof", woof.read);

apiRouter.get("/fetch", fetch.read);

apiRouter.post("/spot", spot.create);

export { apiRouter };
