"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserController {
    index(req, res) {
        return res.send({ message: "User Endpoint" });
    }
    create(req, res) {
        return res.send(req.body);
    }
    show(req, res) {
        return res.send("asd");
    }
    update(req, res) {
        return res.send("asd");
    }
    delete(req, res) {
        return res.send("asd");
    }
}
exports.default = new UserController();
