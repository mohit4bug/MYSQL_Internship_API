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
    const q = "UPDATE personal SET `firstName`= ?,`lastName`= ?,`profileImage`= ?,`gender`= ?,`countryCode`= ?,`mobile`= ?,`currCity`= ?,`secondCity`= ? WHERE uid  = ?";
    const uid = req.body.uid;
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

export const PersonalGet = (req, res) => {}