import { Prisma } from "@prisma/client";
import { NextFunction, Request, Response } from "express"


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {

    
    let status = err.statusCode || 500;
    let success = false;
    let message = err.message || "Something went wrong!";
    

    if (err instanceof Prisma.PrismaClientValidationError) {
        message = 'Validation Error';
        
    }
    else if (err instanceof Prisma.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = "Duplicate Key error";
            
        }
    }

    res.status(status).json({
        success,
        status,
    
        message,
        
    })
};

export default globalErrorHandler;