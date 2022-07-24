const teamController = require("../controllers/teamController");
const express = require("express");
const router = express.Router();
const verifyToken=require ('../helpers/verifyToken')
const verifyOwner=require('../helpers/isNotTeamOwner')
const verifyMember=require('../helpers/isNotTeamMember')
const verifyTeamOwner=require('../helpers/isTeamOwner')

router.post("/:id", teamController.createTeam);
router.get("/", teamController.getTeacherTeams);
router.get("/studentList", teamController.getStudentTeams);
router.post("/teamMembers/:id",verifyOwner,verifyMember, teamController.addTeamMembers);
router.delete("/:id",verifyTeamOwner, teamController.deleteTeam);
router.get("/team/:id",teamController.getTeamById);
router.put("/teamMembers/:id", teamController.deleteTeamMember);
router.put("/updateTeam/:id",verifyTeamOwner,teamController.updateTeam)
router.get("/members/:id", teamController.getTeamMembers);
router.get("/owner/:id", teamController.getTeamOwner);


module.exports = router;