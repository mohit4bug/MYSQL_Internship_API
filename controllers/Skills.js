import { db } from "../index.js"

export const SkillsPost = (req, res) => {
    const skills = JSON.stringify(req.body.skills)
    const q = "INSERT INTO skills (`skills`,`uid`) VALUES (?)";
    const values = [skills, req.body.uid];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.status(201).json("skills successfully updated");
    })
}

export const SkillsPut = (req, res) => {
    const uid = req.params.uid;

    const q = "SELECT * FROM skills WHERE uid = (?)";
    const values = [uid];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {
            const skills = JSON.stringify(req.body.skills)
            const q = "UPDATE skills SET `skills` = ? WHERE `uid` = ?";

            const values = [skills];
            db.query(q, [...values, uid], (err, data) => {

                if (err) return res.json(err);
                return res.status(200).json("skills successfully updated");
            })
        }
        else {
            return res.status(404).json("user details not found");
        }
    })
}

export const SKillsGet = (req, res) => {
    const q = "SELECT * FROM skills WHERE uid = (?)";
    const values = [req.params.uid];
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) return res.status(200).json(JSON.parse(data[0].skills));
        else return res.status(404).json("user details not found");

    })
}