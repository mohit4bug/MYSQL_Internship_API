import express from "express";
import { DeleteUser } from "../controllers/User.js";
const router = express.Router();

router.delete("/", DeleteUser)


export default router