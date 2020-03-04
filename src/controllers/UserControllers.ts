import { Request, Response } from "express";

import ControllerInterface from "./ControllerInterface";

class UserController implements ControllerInterface {
  index(req: Request, res: Response): Response {
    return res.send({ message: "User Endpoint" });
  }
  create(req: Request, res: Response): Response {
    return res.send(req.body);
  }
  show(req: Request, res: Response): Response {
    return res.send("asd");
  }
  update(req: Request, res: Response): Response {
    return res.send("asd");
  }
  delete(req: Request, res: Response): Response {
    return res.send("asd");
  }
}

export default new UserController();
