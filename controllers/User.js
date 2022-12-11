import { db } from "../index.js"
import bcrypt from "bcrypt"


export const DeleteUser = (req, res) => {

    const q = "SELECT * FROM users WHERE email = (?)";
    const values = [req.body.email];


    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        if (data.length === 0) return res.status(404).json("user not found");

        const hash = data[0].password;
        const isValid = bcrypt.compareSync(req.body.password, hash);
        if (!isValid) return res.status(401).json("wrong password");

        const q = "DELETE FROM users WHERE email = (?)";
        const values = [req.body.email];
        db.query(q, values, (err, data) => {
            if (err) return res.json(err);
            return res.status(201).json("user deleted succesfully")
        })


    })

}
