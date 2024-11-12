
import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";
import { BookService } from "./book.service";

const createBooking: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body)
   
    const result = await BookService.createBookingDB(req.body)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Book created successfully",
        data: result
    })
})

const getAllBooking: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    
   
    const result = await BookService.getAllBookFromDB()

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Books retrieved successfully",
        data: result
    })
})
const getSingleBook: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const {bookId}=req.params
    
   
    const result = await BookService.getSingleBookFromDB(bookId)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Book retrieved successfully",
        data: result
    })
})
const updateSingleBook: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const {bookId}=req.params
    
   
    const result = await BookService.updateSingleBookFromDB(bookId,req.body)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Book updated successfully",
        data: result
    })
})

export const BookController={
    createBooking,
    getAllBooking,
    getSingleBook,
    updateSingleBook
}