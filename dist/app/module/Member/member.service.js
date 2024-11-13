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
exports.MemberService = void 0;
const client_1 = require("@prisma/client");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const prisma = new client_1.PrismaClient();
const getAllMembersFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.memberTable.findMany();
    // console.log(result,"data")
    return result;
});
const getSingleMemberDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.memberTable.findUnique({
        where: {
            memberId: id
        }
    });
    if (!result) {
        throw new AppError_1.default(400, "Invalid member Id");
    }
    console.log(result, "single member data");
    return result;
});
const updateSingleMemberFromDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma.memberTable.findUnique({
        where: {
            memberId: id
        }
    });
    if (!member) {
        throw new AppError_1.default(400, "Invalid member Id");
    }
    const result = yield prisma.memberTable.update({
        where: {
            memberId: id
        },
        data
    });
    const { membershipDate } = result, other = __rest(result, ["membershipDate"]);
    return other;
});
const deleteSingleMemberFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const member = yield prisma.memberTable.findUnique({
        where: {
            memberId: id
        }
    });
    if (!member) {
        throw new AppError_1.default(400, "Invalid member Id");
    }
    const result = yield prisma.memberTable.delete({
        where: {
            memberId: id
        }
    });
    return result;
});
const createMemberDB = (memberData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma.memberTable.create({
        data: memberData
    });
    // console.log(result,"member create servicedata")
    return result;
});
exports.MemberService = {
    getAllMembersFromDB,
    createMemberDB,
    getSingleMemberDB,
    updateSingleMemberFromDB,
    deleteSingleMemberFromDB
};
