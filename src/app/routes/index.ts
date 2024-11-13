import express from 'express';
import { BookRoutes } from '../module/Book/book.routes';
import { MemberRoutes } from '../module/Member/member.route';
import { BorrowRoutes } from '../module/Borrow/borrow.routes';




const router = express.Router();

const moduleRoutes = [
    {
        path: '/books',
        route: BookRoutes
    },
    {
        path: '/members',
        route: MemberRoutes
    },
    {
        path: '/borrow',
        route: BorrowRoutes
    }


];

moduleRoutes.forEach(route => router.use(route.path, route.route))

export default router;