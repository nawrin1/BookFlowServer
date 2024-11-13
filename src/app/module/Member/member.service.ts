import {  MemberTable, PrismaClient } from "@prisma/client";
import AppError from "../../errors/AppError";



const prisma= new PrismaClient()
const getAllMembersFromDB=async()=>{


    const result=await prisma.memberTable.findMany()


    console.log(result,"data")
    return result



}


const getSingleMemberDB=async(id:any)=>{


    const result=await prisma.memberTable.findUnique({
        where:{
            memberId:id
        }
    })
    if(!result){
        throw new AppError(400,"Invalid member Id") 
    }


    console.log(result,"single member data")
    return result



}
const updateSingleMemberFromDB=async(id:any,data:Partial<MemberTable>)=>{


    const member=await prisma.memberTable.findUnique({
        where:{
           memberId:id
        }
    })
    if(!member){
        throw new AppError(400,"Invalid member Id") 
    }

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


    const member=await prisma.memberTable.findUnique({
        where:{
           memberId:id
        }
    })
    if(!member){
        throw new AppError(400,"Invalid member Id") 
    }

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