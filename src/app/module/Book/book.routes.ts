import express, { Request, Response } from 'express'
import { BookController } from './book.controller';


const router=express.Router()


router.post('/',BookController.createBooking)
router.get('/',BookController.getAllBooking)

export const BookRoutes=router;