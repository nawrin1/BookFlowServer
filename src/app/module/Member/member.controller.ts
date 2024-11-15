
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
const getSingleMember: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const {memberId}=req.params
    
   
    const result = await MemberService.getSingleMemberDB(memberId)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Member retrieved successfully",
        data: result
    })
})
const updateSingleMember: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const {memberId}=req.params
    
   
    const result = await MemberService.updateSingleMemberFromDB(memberId,req.body)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Member updated successfully",
        data: result
    })
})
const deleteSingleMember: RequestHandler = catchAsync(async (req: Request, res: Response) => {
    const {memberId}=req.params
    
   
    const result = await MemberService.deleteSingleMemberFromDB(memberId)

    sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Member successfully deleted", 

       
    })
})

export const MemberController={
    getAllMembers,
    createMember,
    getSingleMember,
    updateSingleMember,
    deleteSingleMember
    
}