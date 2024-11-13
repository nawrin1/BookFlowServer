import {  PrismaClient } from "@prisma/client";

import moment from "moment";
import AppError from "../../errors/AppError";

const prisma= new PrismaClient()

const postBorrowBookDB=async(bookBorrowData:any )=>{



    const result = await prisma.$transaction(async (transactionClient) => {
    const book= await prisma.bookTable.findUnique({
            where: {
              bookId: bookBorrowData.bookId,
            },
          });
    if(!book){
      throw new AppError(400,"Invalid Book Id")
    }

    if(book.availableCopies<=0){
      throw new AppError(400,"No available copies")

    }

     const member= await prisma.memberTable.findUnique({
            where: {
              memberId:bookBorrowData.memberId,
            },
          });
    if(!member){
            throw new AppError(400,"Invalid Member Id")
          }



      
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