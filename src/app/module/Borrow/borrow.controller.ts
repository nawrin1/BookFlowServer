import { Request, RequestHandler, Response } from "express";
import sendResponse from "../../shared/sendResponse";
import catchAsync from "../../shared/catchAsync";
import { BorrowService } from "./borrow.service";


const postBorrowBook: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    // console.log(req.body);

    const result = await BorrowService.postBorrowBookDB(req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Book borrowed successfully",
      data: result,
    });
  }
);



export const BorrowController = {
    postBorrowBook
 
};
