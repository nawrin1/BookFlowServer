"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, jsonData) => {
    {
        (jsonData === null || jsonData === void 0 ? void 0 : jsonData.data) ? res.status(jsonData.statusCode).json({
            success: jsonData.success,
            status: jsonData.statusCode,
            message: jsonData.message,
            data: (jsonData === null || jsonData === void 0 ? void 0 : jsonData.data) || null || undefined
        }) :
            res.status(jsonData.statusCode).json({
                success: jsonData.success,
                status: jsonData.statusCode,
                message: jsonData.message,
            });
    }
};
exports.default = sendResponse;
