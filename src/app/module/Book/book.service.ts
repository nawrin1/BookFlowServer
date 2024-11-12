import { BookTable, PrismaClient } from "@prisma/client";



const prisma= new PrismaClient()
const getAllBookFromDB=async()=>{


    const result=await prisma.bookTable.findMany()


    console.log(result,"data")
    return result



}


const getSingleBookFromDB=async(id:any)=>{


    const result=await prisma.bookTable.findUniqueOrThrow({
        where:{
            bookId:id
        }
    })


    console.log(result,"single book data")
    return result



}
const updateSingleBookFromDB=async(id:any,data:Partial<BookTable>):Promise<BookTable>=>{


    await prisma.bookTable.findUniqueOrThrow({
        where:{
            bookId:id
        }
    })

    const result=await prisma.bookTable.update({
        where:{
            bookId:id
        },
        data
    })


    console.log(result,"update single book data")
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
    updateSingleBookFromDB
   
}