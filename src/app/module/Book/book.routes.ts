import express, { Request, Response } from 'express'
import { BookController } from './book.controller';


const router=express.Router()


router.post('/',BookController.createBooking)
router.get('/',BookController.getAllBooking)
router.get('/:bookId',BookController.getSingleBook)
router.put('/:bookId',BookController.updateSingleBook)
router.delete('/:bookId',BookController.deleteSingleBook)

export const BookRoutes=router;