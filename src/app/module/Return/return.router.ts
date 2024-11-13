import express, { Request, Response } from 'express'
import { ReturnController } from './return.controller';





const router=express.Router()


router.post('/',ReturnController.returnBook)


export const ReturnRoutes=router;            