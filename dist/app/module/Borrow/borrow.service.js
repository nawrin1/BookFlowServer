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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
const client_1 = require("@prisma/client");
const moment_1 = __importDefault(require("moment"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma = new client_1.PrismaClient();
const postBorrowBookDB = (bookBorrowData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const book = yield prisma.bookTable.findUnique({
            where: {
                bookId: bookBorrowData.bookId,
            },
        });
        if (!book) {
            throw new AppError_1.default(400, "Invalid Book Id");
        }
        if (book.availableCopies <= 0) {
            throw new AppError_1.default(400, "No available copies");
        }
        const member = yield prisma.memberTable.findUnique({
            where: {
                memberId: bookBorrowData.memberId,
            },
        });
        if (!member) {
            throw new AppError_1.default(400, "Invalid Member Id");
        }
        const borrowData = yield prisma.borrowRecordTable.create({
            data: bookBorrowData
        });
        return borrowData;
    }));
    const { returnDate } = result, other = __rest(result, ["returnDate"]);
    return other;
});
const overdueBorrowBookDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.$transaction((transactionClient) => __awaiter(void 0, void 0, void 0, function* () {
        const borrowlist = yield prisma.borrowRecordTable.findMany({
            include: {
                book: true,
                member: true
            }
        });
        // const borrowData=await prisma.borrowRecordTable.create({
        //     data:bookBorrowData
        // })
        // const avl=borrowlist[0]
        // const val1=val.borrowDate
        // const val2=val.returnDate
        // const result=val1-
        const list1 = [];
        borrowlist.forEach((record) => {
            const borrowDate = (0, moment_1.default)(record.borrowDate);
            const returnDate = (0, moment_1.default)(record.returnDate || new Date());
            const daysdifference = returnDate.diff(borrowDate, 'days');
            const overdueDays = daysdifference - 14;
            if (overdueDays > 0) {
                list1.push({
                    borrowId: record.borrowId,
                    bookTitle: record.book.title,
                    borrowerName: record.member.name,
                    overdueDays,
                });
            }
        });
        // console.log(list1)
        return list1;
    }));
    return result;
});
exports.BorrowService = {
    postBorrowBookDB,
    overdueBorrowBookDB
};
