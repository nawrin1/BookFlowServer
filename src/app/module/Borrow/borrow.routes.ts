import express, { Request, Response } from 'express'
import { BorrowController } from './borrow.controller';




const router=express.Router()


router.post('/',BorrowController.postBorrowBook)


export const BorrowRoutes=router;