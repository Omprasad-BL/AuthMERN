import express from 'express';
import {signin,signup,login} from '../controllers/auth.controller.js'
const router = express.Router();
 
router.post("/signup",signup);
router.post("/signin",signin);
router.post("/login",login);

// router.get("signup",(req, res) => {
//     res.send("signup route")
// });

// router.get("signup",(req, res) => {
//     res.send("signup route")
// });

// router.get("signup",(req, res) => {
//     res.send("signup route")
// });

export default router;
