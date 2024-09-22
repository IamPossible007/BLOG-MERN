import express from 'express'
import { verifyUser } from '../utils/verifyUser.js';
import { create } from '../controllers/post.controllers.js';


const router = express.Router();
router.post('/create', verifyUser, create)

export default router; 