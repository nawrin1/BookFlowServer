import {  MemberTable, PrismaClient } from "@prisma/client";



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
const updateSingleMemberFromDB=async(id:any,data:Partial<MemberTable>)=>{


    await prisma.memberTable.findUniqueOrThrow({
        where:{
           memberId:id
        }
    })

    const result=await prisma.memberTable.update({
        where:{
          memberId:id
        },
        data
    })

   
     const { membershipDate,...other }=result;


 
    return other

}
const deleteSingleMemberFromDB=async(id:any)=>{


    await prisma.memberTable.findUniqueOrThrow({
        where:{
           memberId:id
        }
    })

    const result=await prisma.memberTable.delete({
        where:{
            memberId:id
        }
       
    })


    
    return result



}
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
    getSingleMemberDB,
    updateSingleMemberFromDB,
    deleteSingleMemberFromDB
   
}