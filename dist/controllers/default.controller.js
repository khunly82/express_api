"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultController = void 0;
var DefaultController = /** @class */ (function () {
    function DefaultController() {
    }
    DefaultController.getHello = function (req, res) {
        var name = req.params.name;
        res.json({ value: "Hello ".concat(name, " !!") });
    };
    return DefaultController;
}());
exports.DefaultController = DefaultController;
