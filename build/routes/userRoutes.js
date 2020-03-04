"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRoutes {
  constructor() {
    this.router = express_1.Router();
    this.routes();
  }
  routes() {
    this.router.route("/").get((req, res) => {
      res.send("User Endpoint");
    });
    this.router.route("/").post((req, res) => {
      res.send(req.body);
    });
  }
}
exports.default = new UserRoutes().router;
