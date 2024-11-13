import {  PrismaClient } from "@prisma/client";

import moment from "moment";

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


      
        const borrowData=await prisma.borrowRecordTable.create({
            data:bookBorrowData
        })

       
        
        return borrowData
    
        
      });
      const {returnDate,...other}=result




      return other;

}


const overdueBorrowBookDB=async( )=>{



    const result = await prisma.$transaction(async (transactionClient) => {
        const borrowlist=await prisma.borrowRecordTable.findMany({
            include:{
                book:true,
                member:true
            }
          });
          


      
        // const borrowData=await prisma.borrowRecordTable.create({
        //     data:bookBorrowData
        // })
        
        // const avl=borrowlist[0]
        // const val1=val.borrowDate
        // const val2=val.returnDate
        
        // const result=val1-
        const list1:any=[]
        borrowlist.forEach((record) => {
          const borrowDate = moment(record.borrowDate);
          const returnDate = moment(record.returnDate || new Date());
          const daysdifference=returnDate.diff(borrowDate, 'days')
          const overdueDays = daysdifference - 14;
  
          if (overdueDays > 0) {
              list1.push({
                  borrowId: record.borrowId,
                  bookTitle: record.book.title,
                  borrowerName: record.member.name,
                  overdueDays,
              });
          }
      });

      // console.log(list1)
      return list1

       
        
        

    
        
      });
      return result
  




     

}




export const BorrowService ={
    
   postBorrowBookDB,
   overdueBorrowBookDB
  
}