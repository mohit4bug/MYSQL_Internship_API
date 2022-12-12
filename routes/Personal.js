import express from "express";
import { PersonalPut, PersonalPost, PersonalGet } from "../controllers/Personal.js";
import multer from "multer";
const router = express.Router();



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/images')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }
})

const upload = multer({ storage: storage })


router.post("/details", upload.single("profileImage"), PersonalPost);
router.put("/details/:uid", upload.single("profileImage"), PersonalPut);
router.get("/details/:uid", PersonalGet);


export default router