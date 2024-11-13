import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";

import { ReturnService } from "./return.service";


const returnBook : RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
   

    const result = await ReturnService.returnBookDB(req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book returned successfully",
      data: result,
    });
  }
);



export const ReturnController = {
    returnBook
 
};
