"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReturnService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma = new client_1.PrismaClient();
const returnBookDB = (returnData) => __awaiter(void 0, void 0, void 0, function* () {
    const { borrowId } = returnData;
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const borrow = yield prisma.borrowRecordTable.findUnique({
            where: {
                borrowId: borrowId,
            },
        });
        if (!borrow) {
            throw new AppError_1.default(400, "Invalid Borrow Id");
        }
        const returnData = yield prisma.borrowRecordTable.update({
            where: {
                borrowId: borrowId,
            },
            data: {
                returnDate: new Date()
            }
        });
        return returnData;
    }));
    return;
});
exports.ReturnService = {
    returnBookDB
};
