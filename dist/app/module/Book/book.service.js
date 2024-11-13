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
exports.BookService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma = new client_1.PrismaClient();
const getAllBookFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bookTable.findMany();
    console.log(result, "data");
    return result;
});
const getSingleBookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bookTable.findUnique({
        where: {
            bookId: id
        }
    });
    if (!result) {
        throw new AppError_1.default(400, "Invalid Book Id");
    }
    console.log(result, "single book data");
    return result;
});
const updateSingleBookFromDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma.bookTable.findUnique({
        where: {
            bookId: id
        }
    });
    if (!book) {
        throw new AppError_1.default(400, "Invalid Book Id");
    }
    const result = yield prisma.bookTable.update({
        where: {
            bookId: id
        },
        data
    });
    console.log(result, "update single book data");
    return result;
});
const deleteSingleBookFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const book = yield prisma.bookTable.findUnique({
        where: {
            bookId: id
        }
    });
    if (!book) {
        throw new AppError_1.default(400, "Invalid Book Id");
    }
    const result = yield prisma.bookTable.delete({
        where: {
            bookId: id
        }
    });
    return result;
});
const createBookingDB = (bookData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.bookTable.create({
        data: bookData
    });
    console.log(result, "Bookcreate servicedata");
    return result;
});
exports.BookService = {
    getAllBookFromDB,
    getSingleBookFromDB,
    createBookingDB,
    updateSingleBookFromDB,
    deleteSingleBookFromDB
};
