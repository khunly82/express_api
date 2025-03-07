"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = require("./routes");
var models_1 = __importDefault(require("./models"));
models_1.default.sequelize.sync();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(routes_1.routes);
app.listen(3000, function () {
    console.log("listening port 3000");
});
