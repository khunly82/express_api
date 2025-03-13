"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovieWithActorsSchema = exports.MovieSchema = void 0;
var yup_1 = require("yup");
exports.MovieSchema = (0, yup_1.object)({
    title: (0, yup_1.string)()
        .required()
        .max(255)
        .min(1),
    /*.matches(/^\d{2}\.\d{2}\.\d{2}-\d{3}\.\d{2}$/)*/
    duration: (0, yup_1.number)().required()
        .min(1)
        .max(999999)
        .integer(),
    releaseYear: (0, yup_1.number)().required()
        .integer()
        .min(1800)
        .max(2100),
    hasSubtitle: (0, yup_1.bool)().default(false)
});
exports.MovieWithActorsSchema = exports.MovieSchema.shape({
    actors: (0, yup_1.array)((0, yup_1.number)()).required()
});
