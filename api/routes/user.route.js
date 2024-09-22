import express from 'express'
import { verifyUser } from '../utils/verifyUser.js';
import { deleteUser, updateUser } from '../controllers/user.controller.js';
import { signout } from '../controllers/user.controller.js';

const router = express.Router();


router.put('/update/:userId',verifyUser,updateUser);
router.delete('/delete/:userId',verifyUser,deleteUser);
router.post('/signout',signout);

export default router; 