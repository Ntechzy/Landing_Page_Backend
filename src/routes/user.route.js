import { Router } from "express";
import { registerUser, test } from "../controllers/user.controller.js";

const router = Router()

router.route('/').get(test)
router.route('/register').post(registerUser)

export default router