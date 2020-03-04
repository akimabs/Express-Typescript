"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserControllers_1 = __importDefault(require("../controllers/UserControllers"));
class UserRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/", UserControllers_1.default.index);
        this.router.post("/", UserControllers_1.default.create);
    }
}
exports.default = new UserRoutes().router;
