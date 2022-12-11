import express from "express";
import { SkillsPut, SkillsPost, SKillsGet } from "../controllers/Skills.js";
const router = express.Router();

router.post("/details", SkillsPost);
router.put("/details", SkillsPut);
router.get("/details", SKillsGet);


export default router