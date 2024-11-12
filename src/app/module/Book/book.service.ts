import { PrismaClient } from "@prisma/client";



const prisma= new PrismaClient()
const getAllBookFromDB=async()=>{


    const result=await prisma.bookTable.findMany()


    console.log(result,"data")
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
    createBookingDB
   
}