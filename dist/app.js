"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./app/routes"));
const globalErrorHandlers_1 = __importDefault(require("./app/middlewares/globalErrorHandlers"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/', routes_1.default);
app.get('/', (req, res) => {
    res.send({
        Message: "Bookflow api running..."
    });
});
app.use(globalErrorHandlers_1.default);
app.use((req, res, next) => {
    res.status(404).json({
        success: false,
        status: 404,
        message: "API NOT FOUND!"
    });
});
exports.default = app;
