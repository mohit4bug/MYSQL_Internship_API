import e from "express";
import { db } from "../index.js"

export const PersonalPost = (req, res) => {
    const q = "INSERT INTO personal (`firstName`,`lastName`,`profileImage`,`gender`,`countryCode`,`mobile`,`currCity`,`secondCity`,`uid`) VALUES (?)";
    const values = [
        req.body.firstName,
        req.body.lastName,
        req.body.profileImage,
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

    const q = "SELECT * FROM personal WHERE uid = (?)";
    const values = [uid];

    db.query(q, [values], (err, data) => {

        if (err) return res.json(err);

        if (data.length > 0) {
            const q = "UPDATE personal SET `firstName`= ?,`lastName`= ?,`profileImage`= ?,`gender`= ?,`countryCode`= ?,`mobile`= ?,`currCity`= ?,`secondCity`= ? WHERE uid  = ?";
            const values = [
                req.body.firstName,
                req.body.lastName,
                req.body.profileImage,
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
        else {
            return res.status(404).json("User details not found");
        }
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