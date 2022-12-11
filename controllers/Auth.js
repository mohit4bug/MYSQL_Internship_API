import { db } from "../index.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const Register = (req, res) => {
    const q = "SELECT * FROM users WHERE email = (?)";
    const values = [req.body.email]
    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        if (data.length) return res.status(403).json("user already registered");

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`email`,`password` ,`firstName` ,`lastName`) VALUES (?)";
        const values = [req.body.email, hash, req.body.firstName, req.body.lastName];

        db.query(q, [values], (err, data) => {
            if (err) return res.json(err);
            return res.json("user registration successful");
        })
    })
}


export const Login = (req, res) => {
    const q = "SELECT * FROM users WHERE email = (?)";
    const value = [req.body.email];
    db.query(q, value, (err, data) => {
        if (err) return res.json(err);

        if (data.length) {
            const isValid = bcrypt.compareSync(req.body.password, data[0].password);
            if (!isValid) return res.status(403).json("Invalid credentials");

            const token = jwt.sign({ email: req.body.email, }, "JWTSECRET");
            return res.status(201).cookie("auth", token, { httpOnly: true }).json("user login successful");
        }
        return res.status(404).json("user not found");


    })
}