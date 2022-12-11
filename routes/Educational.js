import express from "express";
import { EducationalPost, EducationalPut, EducationalGet } from "../controllers/Educational.js";
const router = express.Router();

router.post("/details", EducationalPost);
router.put("/details/:uid", EducationalPut);
router.get("/details/:uid", EducationalGet);


export default router