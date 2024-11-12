import {  PrismaClient } from "@prisma/client";



const prisma= new PrismaClient()
const getAllMembersFromDB=async()=>{


    const result=await prisma.memberTable.findMany()


    console.log(result,"data")
    return result



}


const getSingleMemberDB=async(id:any)=>{


    const result=await prisma.memberTable.findUniqueOrThrow({
        where:{
            memberId:id
        }
    })


    console.log(result,"single member data")
    return result



}
// const updateSingleBookFromDB=async(id:any,data:Partial<BookTable>):Promise<BookTable>=>{


//     await prisma.bookTable.findUniqueOrThrow({
//         where:{
//             bookId:id
//         }
//     })

//     const result=await prisma.bookTable.update({
//         where:{
//             bookId:id
//         },
//         data
//     })


//     console.log(result,"update single book data")
//     return result

// }
// const deleteSingleBookFromDB=async(id:any)=>{


//     await prisma.bookTable.findUniqueOrThrow({
//         where:{
//             bookId:id
//         }
//     })

//     const result=await prisma.bookTable.delete({
//         where:{
//             bookId:id
//         }
       
//     })


    
//     return result



// }
const createMemberDB=async(memberData:any )=>{


    const result=await prisma.memberTable.create({
        data:memberData
    })


    // console.log(result,"member create servicedata")
    return result

}




export const MemberService ={
    getAllMembersFromDB,
    createMemberDB,
    getSingleMemberDB
   
}