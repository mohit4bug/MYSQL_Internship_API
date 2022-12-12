import { db } from "../index.js"
import fs from "fs"


export const PersonalPost = (req, res) => {

    const profileImage = req.file ? req.file.filename : null;
    const q = "INSERT INTO personal (`firstName`,`lastName`,`profileImage`,`gender`,`countryCode`,`mobile`,`currCity`,`secondCity`,`uid`) VALUES (?)";
    const values = [
        req.body.firstName,
        req.body.lastName,
        profileImage,
        req.body.gender,
        req.body.countryCode,
        req.body.mobile,
        req.body.currCity,
        req.body.secondCity,
        req.body.uid
    ]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.status(201).json("Personal details uploaded successfully")
    })

}






export const PersonalPut = (req, res) => {
    const uid = req.params.uid;
    const profileImage = req.file ? req.file.filename : null;

    const q = "SELECT * FROM personal WHERE uid = (?)";
    const values = [uid];

    db.query(q, [values], (err, data) => {

        if (err) return res.json(err);
        if (data.length > 0) {

            // If There if profileImage delete the previous one
            const prevProfileImage = data[0].profileImage;
            if (prevProfileImage) {
                fs.unlinkSync("./public/images/" + prevProfileImage);
            }

            const q = "UPDATE personal SET `firstName`= ?,`lastName`= ?,`profileImage`= ?,`gender`= ?,`countryCode`= ?,`mobile`= ?,`currCity`= ?,`secondCity`= ? WHERE uid  = ?";
            const values = [
                req.body.firstName,
                req.body.lastName,
                profileImage,
                req.body.gender,
                req.body.countryCode,
                req.body.mobile,
                req.body.currCity,
                req.body.secondCity,
            ]
            db.query(q, [...values, uid], (err, data) => {
                if (err) return res.json(err);
                return res.status(201).json("Personal details updated successfully")
            })
        }
        else return res.status(404).json("User details not found");

    })

}






export const PersonalGet = (req, res) => {
    const q = "SELECT * FROM personal WHERE uid = (?)";
    const values = [req.params.uid];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) return res.status(200).json(data[0]);
        else return res.status(404).json("user details not found");
    })
}