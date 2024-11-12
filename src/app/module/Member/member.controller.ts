
import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";
import { MemberService } from "./member.service";


const createMember: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    console.log(req.body)
   
    const result = await MemberService.createMemberDB(req.body)

    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: "Member created successfully",
        data: result
    })
})

const getAllMembers: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    
   
    const result = await MemberService.getAllMembersFromDB()

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Members retrieved successfully",
        data: result
    })
})
// const getSingleBook: RequestHandler = catchAsync(async (req: Request, res: Response) => {
//     const {bookId}=req.params
    
   
//     const result = await BookService.getSingleBookFromDB(bookId)

//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: "Book retrieved successfully",
//         data: result
//     })
// })
// const updateSingleBook: RequestHandler = catchAsync(async (req: Request, res: Response) => {
//     const {bookId}=req.params
    
   
//     const result = await BookService.updateSingleBookFromDB(bookId,req.body)

//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: "Book updated successfully",
//         data: result
//     })
// })
// const deleteSingleBook: RequestHandler = catchAsync(async (req: Request, res: Response) => {
//     const {bookId}=req.params
    
   
//     const result = await BookService.deleteSingleBookFromDB(bookId)

//     sendResponse(res, {
//         statusCode: 200,
//         success: true,
//         message: "Book successfully deleted", 

       
//     })
// })

export const MemberController={
    getAllMembers,
    createMember
    
}