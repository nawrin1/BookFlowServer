"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const globalErrorHandler = (err, req, res, next) => {
    let status = err.statusCode || 500;
    let success = false;
    let message = err.message || "Something went wrong!";
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = "Duplicate Key error";
        }
    }
    res.status(status).json({
        success,
        status,
        message,
    });
};
exports.default = globalErrorHandler;
