"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
var express_1 = require("express");
var default_controller_1 = require("./controllers/default.controller");
var message_controller_1 = require("./controllers/message.controller");
exports.routes = (0, express_1.Router)()
    .get("/hello/:name", default_controller_1.DefaultController.getHello)
    .post("/message", message_controller_1.MessageController.send);
