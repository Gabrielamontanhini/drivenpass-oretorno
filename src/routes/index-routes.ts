import { Router } from "express";
import usersRouter from "./users-routes";
import credentialsRouter from "./credentials-routes";
import authRouter from "./auth-routes";

const router = Router()

router.use(usersRouter)
router.use(authRouter)
router.use(credentialsRouter)

export default router