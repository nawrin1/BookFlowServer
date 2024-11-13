import {  PrismaClient } from "@prisma/client";



const prisma= new PrismaClient()

const postBorrowBookDB=async(bookBorrowData:any )=>{



    const result = await prisma.$transaction(async (transactionClient) => {
        await prisma.bookTable.findUniqueOrThrow({
            where: {
              bookId: bookBorrowData.bookId,
            },
          });
           await prisma.memberTable.findUniqueOrThrow({
            where: {
              memberId:bookBorrowData.memberId,
            },
          });


      
        const result=await prisma.borrowRecordTable.create({
            data:bookBorrowData
        })

       
        const {returnDate,...other}=result
        return other
    
        
      });


}




export const BorrowService ={
    
   postBorrowBookDB
  
}