import { Router, Request, Response } from "express";
import RouteInterface from "./RouteInterface";

class UserRoutes implements RouteInterface {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.route("/").get((req: Request, res: Response) => {
      res.send("User Endpoint");
    });

    this.router.route("/").post((req: Request, res: Response) => {
      res.send(req.body);
    });
  }
}

export default new UserRoutes().router;
