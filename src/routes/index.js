import { Router } from "express";
import spot from "../controllers/spot";
import woof from "../controllers/woof";

const apiRouter = Router();

apiRouter.get("/woof", woof.read);

apiRouter.post("/spot", spot.create);

export { apiRouter };
