import { Router } from "express";
import { UserRouter } from "./user.routes";

export class RouterServer {
  static get router() {
    const router = Router();
    router.use("/user", UserRouter.router);
    return router;
  }
}
