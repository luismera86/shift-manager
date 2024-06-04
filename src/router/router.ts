import { Router } from "express";
import { UserRouter } from "../modules/user/router/user.router";

export class RouterSever {
  static get router() {
    const router = Router();
    router.use("/user", UserRouter.router);
    return router;
  }
}
