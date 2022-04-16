import express from "express";
// import authController from "../controllers/authController.js";
// import auth from '../middlewares/auth.js'

const router = express.Router();

router.route('/register').post(authController.register)
router.route('/login').post(authController.login)
router.route('/updateUser').post(auth.auth, authController.updateUser)

export default router;