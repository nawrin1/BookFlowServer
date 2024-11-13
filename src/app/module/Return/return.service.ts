import {  PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";



const prisma= new PrismaClient()

const returnBookDB=async(returnData:any )=>{
    const {borrowId}=returnData



    const result = await prisma.$transaction(async (transactionClient) => {
    const borrow=    await prisma.borrowRecordTable.findUnique({
            where: {
              borrowId: borrowId,
            },
          });
    if(!borrow){
      throw new AppError(400,"Invalid Borrow Id")
      
    }
           const returnData= await prisma.borrowRecordTable.update({
            where: {
             borrowId: borrowId,

            },
            data:{
                returnDate:new Date()
                
            }
            
          });


      


       
        
        return returnData
    
        
      });
      return 
      

}




export const ReturnService ={
    
   returnBookDB
  
}