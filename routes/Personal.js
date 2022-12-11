import express from "express";
import { PersonalPut,PersonalPost, PersonalGet } from "../controllers/Personal.js";
const router = express.Router();

router.post("/details", PersonalPost);
router.put("/details/:uid", PersonalPut);
router.get("/details/:uid", PersonalGet);


export default router