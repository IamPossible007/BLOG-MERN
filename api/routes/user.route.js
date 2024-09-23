import express from 'express'
import { verifyUser } from '../utils/verifyUser.js';
import { deleteUser, updateUser } from '../controllers/user.controller.js';
import { signout , getUsers} from '../controllers/user.controller.js';

const router = express.Router();


router.put('/update/:userId',verifyUser,updateUser);
router.delete('/delete/:userId',verifyUser,deleteUser);
router.post('/signout',signout);
router.get('/getusers', verifyUser, getUsers);
router.delete('/delete/:userId', verifyUser, deleteUser);

export default router; 