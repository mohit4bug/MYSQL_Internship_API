import { db } from "../index.js"

export const EducationalPost = (req, res) => {
    let q = "INSERT INTO educational (`gradEduStatus` = ?,`gradStartYear` = ?,`gradEndYear` = ?,`gradCourse` = ?,`gradSpecialization` = ?,`gradDepartment` = ?,`gradPerformance` = ?,"
    q = q + "`postGradEduStatus` = ?,`postGradStartYear` = ?,`postGradEndYear` = ?,`postGradCourse` = ?,`postGradSpecialization` = ?,`postGradDepartment` = ?,`postGradPerformance` = ?,"
    q = q + "`seniorSecondaryStream` = ?,`seniorSecondarySubject` = ?,`seniorSecondarySchoolName` = ?,`seniorSecondaryPercentage` = ?,`seniorSecondaryBoard` = ?,`seniorSecondaryMedium` = ?,"
    q = q + "`secondarySchoolName` = ?,`secondaryPercentage` = ?,`secondaryBoard` = ?,`secondaryMedium` = ?,`uid`) VALUES (?)";

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
    let q = "UPDATE educational SET `gradEduStatus` = ?,`gradStartYear` = ?,`gradEndYear` = ?,`gradCourse` = ?,`gradSpecialization` = ?,`gradDepartment` = ?,`gradPerformance` = ?,"
    q = q + "`postGradEduStatus` = ?,`postGradStartYear` = ?,`postGradEndYear` = ?,`postGradCourse` = ?,`postGradSpecialization` = ?,`postGradDepartment` = ?,`postGradPerformance` = ?,"
    q = q + "`seniorSecondaryStream` = ?,`seniorSecondarySubject` = ?,`seniorSecondarySchoolName` = ?,`seniorSecondaryPercentage` = ?,`seniorSecondaryBoard` = ?,`seniorSecondaryMedium` = ?,"
    q = q + "`secondarySchoolName` = ?,`secondaryPercentage` = ?,`secondaryBoard` = ?,`secondaryMedium` = ? WHERE uid = ?";

    const uid = req.body.uid;

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

export const EducationalGet = (req, res) => { }