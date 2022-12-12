import e from "express"
import { db } from "../index.js"

export const EducationalPost = (req, res) => {
    let q = "INSERT INTO educational (`gradEduStatus`,`gradStartYear` ,`gradEndYear`,`gradCourse` ,`gradSpecialization`,`gradDepartment`,`gradPerformance`, \
            `postGradEduStatus`,`postGradStartYear`,`postGradEndYear`,`postGradCourse` ,`postGradSpecialization`,`postGradDepartment`,`postGradPerformance`,\
            `seniorSecondaryStream`,`seniorSecondarySubject`,`seniorSecondarySchoolName`,`seniorSecondaryPercentage`,`seniorSecondaryBoard`,`seniorSecondaryMedium`,\
            `secondarySchoolName`,`secondaryPercentage`,`secondaryBoard`,`secondaryMedium`,`uid`) VALUES (?)";

    const values = [
        req.body.gradEduStatus,
        req.body.gradStartYear,
        req.body.gradEndYear,
        req.body.gradCourse,
        req.body.gradSpecialization,
        req.body.gradDepartment,
        req.body.gradPerformance,
        req.body.postGradEduStatus,
        req.body.postGradStartYear,
        req.body.postGradEndYear,
        req.body.postGradCourse,
        req.body.postGradSpecialization,
        req.body.postGradDepartment,
        req.body.postGradPerformance,
        req.body.seniorSecondaryStream,
        req.body.seniorSecondarySubject,
        req.body.seniorSecondarySchoolName,
        req.body.seniorSecondaryPercentage,
        req.body.seniorSecondaryBoard,
        req.body.seniorSecondaryMedium,
        req.body.SecondarySchoolName,
        req.body.SecondaryPercentage,
        req.body.SecondaryBoard,
        req.body.SecondaryMedium,
        req.body.uid,
    ]


    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        return res.status(201).json("Educational details uploaded successfully")
    })
}






export const EducationalPut = (req, res) => {
    const uid = req.params.uid;

    const q = "SELECT * FROM educational WHERE uid = (?)";
    const values = [uid];

    db.query(q, [values], (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) {

        let q = "UPDATE educational SET `gradEduStatus` = ?,`gradStartYear` = ?,`gradEndYear` = ?,`gradCourse` = ?,`gradSpecialization` = ?,`gradDepartment` = ?,`gradPerformance` = ?, \
                `postGradEduStatus` = ?,`postGradStartYear` = ?,`postGradEndYear` = ?,`postGradCourse` = ?,`postGradSpecialization` = ?,`postGradDepartment` = ?,`postGradPerformance` = ?, \
                `seniorSecondaryStream` = ?,`seniorSecondarySubject` = ?,`seniorSecondarySchoolName` = ?,`seniorSecondaryPercentage` = ?,`seniorSecondaryBoard` = ?,`seniorSecondaryMedium` = ?, \
                `secondarySchoolName` = ?,`secondaryPercentage` = ?,`secondaryBoard` = ?,`secondaryMedium` = ? WHERE uid = ?";

            const values = [
                req.body.gradEduStatus,
                req.body.gradStartYear,
                req.body.gradEndYear,
                req.body.gradCourse,
                req.body.gradSpecialization,
                req.body.gradDepartment,
                req.body.gradPerformance,
                req.body.postGradEduStatus,
                req.body.postGradStartYear,
                req.body.postGradEndYear,
                req.body.postGradCourse,
                req.body.postGradSpecialization,
                req.body.postGradDepartment,
                req.body.postGradPerformance,
                req.body.seniorSecondaryStream,
                req.body.seniorSecondarySubject,
                req.body.seniorSecondarySchoolName,
                req.body.seniorSecondaryPercentage,
                req.body.seniorSecondaryBoard,
                req.body.seniorSecondaryMedium,
                req.body.SecondarySchoolName,
                req.body.SecondaryPercentage,
                req.body.SecondaryBoard,
                req.body.SecondaryMedium,
                req.body.uid,
            ]
            db.query(q, [...values, uid], (err, data) => {
                if (err) return res.json(err);
                return res.status(201).json("Educational details updated successfully")
            })
        }
        else {
            return res.status(404).json("User details not found");
        }
    })
}






export const EducationalGet = (req, res) => {
    const q = "SELECT * FROM educational WHERE uid = (?)";
    const values = [req.params.uid];
    db.query(q, values, (err, data) => {
        if (err) return res.json(err);
        if (data.length > 0) return res.status(200).json(data[0]);
        else return res.status(404).json("user details not found");
    })
}