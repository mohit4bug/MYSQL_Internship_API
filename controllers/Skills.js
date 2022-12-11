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
    const skills = JSON.stringify(req.body.skills)
    const q = "UPDATE skills SET `skills` = ? WHERE `uid` = ?";
    const uid = req.body.uid;

    const values = [skills];
    db.query(q, [...values, uid], (err, data) => {

        if (err) return res.json(err);
        return res.status(200).json("skills successfully updated");
    })
}

export const SKillsGet = (req, res) => {}