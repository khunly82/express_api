"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActorSchema = void 0;
var yup_1 = require("yup");
exports.ActorSchema = (0, yup_1.object)({
    lastName: (0, yup_1.string)().required().min(1).max(100),
    firstName: (0, yup_1.string)().required().min(1).max(100),
    birthDate: (0, yup_1.date)().required().max(new Date()).nullable()
});
