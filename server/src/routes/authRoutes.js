import express from "express";
import authController from "../controllers/authController.js";
import isPasswordMatching from "../middlewares/isPasswordMatching.js";
import loginValidFields from "../middlewares/loginValidFields.js";
import uniqueEmailAndNickname from "../middlewares/uniqueEmailAndNickname.js";
import validateInput from "../middlewares/ValidateInput.js";
import validUserAndPassword from "../middlewares/validUserAndPassword.js";
// import auth from '../middlewares/auth.js'

const router = express.Router();

router.route('/register').post(validateInput, isPasswordMatching, uniqueEmailAndNickname, authController.register)
router.route('/login').post(loginValidFields, validUserAndPassword, authController.login)
// router.route('/updateUser').post(auth.auth, authController.updateUser)

export default router;