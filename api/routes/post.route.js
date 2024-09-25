import express from 'express'
import { verifyUser } from '../utils/verifyUser.js';
import { create ,getposts} from '../controllers/post.controllers.js';
import { deletePost ,updatePost } from '../controllers/post.controllers.js';

const router = express.Router();
router.post('/create', verifyUser, create)
router.get('/getposts', getposts)
router.delete('/deletepost/:postId/:userId', verifyUser, deletePost)
router.put('/updatepost/:postId/:userId', verifyUser, updatePost)


export default router; 