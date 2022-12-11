import express from "express";
import { SkillsPut, SkillsPost, SKillsGet } from "../controllers/Skills.js";
const router = express.Router();

router.post("/details", SkillsPost);
router.put("/details/:uid", SkillsPut);
router.get("/details/:uid", SKillsGet);


export default router