import express, { Request, Response } from 'express'
import { MemberController } from './member.controller';



const router=express.Router()


router.post('/',MemberController.createMember)
router.get('/',MemberController.getAllMembers)
router.get('/:memberId',MemberController.getSingleMember)
router.put('/:memberId',MemberController.updateSingleMember)
router.delete('/:memberId',MemberController.deleteSingleMember)

export const MemberRoutes=router;