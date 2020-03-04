import { Router, Request, Response } from "express";
import RouteInterface from "./RouteInterface";

import UserController from "../controllers/UserControllers";

class UserRoutes implements RouteInterface {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.get("/", UserController.index);

    this.router.post("/", UserController.create);
  }
}

export default new UserRoutes().router;
