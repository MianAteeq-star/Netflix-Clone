import express from "express"
import { loginController, logoutController, registerController } from "../controller/user.controller.js"

const router = express.Router()

router.route("/login").post(loginController)
router.route("/register").post(registerController)
router.route("/logout").get(logoutController)

export default router