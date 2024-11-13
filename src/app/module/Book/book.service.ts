import { BookTable, PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";



const prisma= new PrismaClient()
const getAllBookFromDB=async()=>{


    const result=await prisma.bookTable.findMany()


    console.log(result,"data")
    return result



}


const getSingleBookFromDB=async(id:any)=>{


    const result=await prisma.bookTable.findUnique({
        where:{
            bookId:id
        }
    })
    if(!result){
        throw new AppError(400,"Invalid Book Id") 
    }


    console.log(result,"single book data")
    return result



}
const updateSingleBookFromDB=async(id:any,data:Partial<BookTable>):Promise<BookTable>=>{


    const book=await prisma.bookTable.findUnique({
        where:{
            bookId:id
        }
    })
    if(!book){
        throw new AppError(400,"Invalid Book Id") 
    }


    const result=await prisma.bookTable.update({
        where:{
            bookId:id
        },
        data
    })


    console.log(result,"update single book data")
    return result

}
const deleteSingleBookFromDB=async(id:any)=>{


    const book=await prisma.bookTable.findUnique({
        where:{
            bookId:id
        }
    })
    if(!book){
        throw new AppError(400,"Invalid Book Id") 
    }

    const result=await prisma.bookTable.delete({
        where:{
            bookId:id
        }
       
    })


    
    return result



}
const createBookingDB=async(bookData:any )=>{


    const result=await prisma.bookTable.create({
        data:bookData
    })


    console.log(result,"Bookcreate servicedata")
    return result

}




export const BookService ={
    getAllBookFromDB,
    getSingleBookFromDB,
    createBookingDB,
    updateSingleBookFromDB,
    deleteSingleBookFromDB
   
}