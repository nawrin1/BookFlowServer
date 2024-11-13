import {  PrismaClient } from "@prisma/client";



const prisma= new PrismaClient()

const returnBookDB=async(returnData:any )=>{
    const {borrowId}=returnData



    const result = await prisma.$transaction(async (transactionClient) => {
        await prisma.borrowRecordTable.findUniqueOrThrow({
            where: {
              borrowId: borrowId,
            },
          });
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