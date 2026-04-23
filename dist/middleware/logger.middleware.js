"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleware = void 0;
const loggerMiddleware = (req, res, next) => {
    console.log("Logging new visitor...");
    next();
};
exports.loggerMiddleware = loggerMiddleware;
