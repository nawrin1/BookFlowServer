
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

export const BookController={
    createBooking,
    getAllBooking
}