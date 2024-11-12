import express, { Request, Response } from 'express'
import { MemberController } from './member.controller';



const router=express.Router()


router.post('/',MemberController.createMember)
router.get('/',MemberController.getAllMembers)
// router.get('/:bookId',BookController.getSingleBook)
// router.put('/:bookId',BookController.updateSingleBook)
// router.delete('/:bookId',BookController.deleteSingleBook)

export const MemberRoutes=router;