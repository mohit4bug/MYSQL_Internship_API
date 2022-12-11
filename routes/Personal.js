import express from "express";
import { PersonalPut,PersonalPost, PersonalGet } from "../controllers/Personal.js";
const router = express.Router();

router.post("/details", PersonalPost);
router.put("/details", PersonalPut);
router.get("/details", PersonalGet);


export default router