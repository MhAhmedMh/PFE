const mongoose = require('mongoose');
const { Team } = require('../models/team');
const { User } = require('../models/user');

createTeam = async (req, res) => {
    let team = new Team({
        user: req.params.id,
        name: req.body.name,
        description: req.body.description,
        members: req.body.members
    });
    team = await team.save();

    if (!team) return res.status(400).send('the team cannot be created!');

    res.send(team);
};
updateTeam = async (req, res) => {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!team) return res.status(500).send(`Team not found`);

    res.send(team);
};
addTeamMembers = async (req, res) => {
    if (!mongoose.isValidObjectId(req.params.id)) {
        return res.status(400).send('Invalid user Id');
    }
    if (!req.body.members) {
        return res.status(501).send('member Not found');
    }
    const team = await Team.findByIdAndUpdate(
        req.params.id,
        { $addToSet: { members: req.body.members } },
        { new: true }
    );
    await team.save();

    if (!team) return res.status(500).send('team Not found');
    res.send(team);
};
getStudentTeams = async (req, res) => {
    let filter = {};
    if (req.query.members) {
        filter = { members: req.query.members };
    }
    const teamList = await Team.find(filter)
        .populate({ path: 'user', select: 'userName + email + imageURL' })
        .populate({ path: 'members', select: 'userName + email' });

    if (!teamList) {
        res.status(500).json({ success: false });
    }
    res.send(teamList);
};
getTeacherTeams = async (req, res) => {
    let filter = {};
    if (req.query.users) {
        filter = { user: req.query.users };
    }
    const teamList = await Team.find(filter)
        .populate({ path: 'user', select: 'userName + email + imageURL' })
        .populate({ path: 'members', select: 'userName + email' });

    if (!teamList) {
        res.status(500).json({ success: false });
    }
    res.send(teamList);
};
deleteTeam = async (req, res) => {
    Team.findByIdAndRemove(req.params.id)
        .then((team) => {
            if (team) {
                return res.status(200).json({ success: true, message: ' team  deleted!' });
            } else {
                return res.status(404).json({ success: false, message: 'team not found!' });
            }
        })
        .catch((err) => {
            return res.status(500).json({ success: false, error: err });
        });
};
deleteTeamMember = async (req, res) => {
    const team = await Team.findById(req.params.id);
    const existUser = await User.findById(req.body.members);
    if (!existUser) {
        return res.status(400).json('User is not a member of this blog');
    } else {
        if (team.members.indexOf(existUser.id) !== -1) {
            team.members = team.members.filter((o) => {
                return o.toString() !== existUser.id.toString();
            });
        }
    }
    team.save();
    res.send(team);
};

getTeamById = async (req, res) => {
    const team = await Team.findById(req.params.id)
        .populate({ path: 'user', select: 'userName + email + imageURL' })
        .populate({ path: 'members', select: 'userName + email + imageURL' });

    if (!team) {
        res.status(500).json({ success: false });
    }
    res.send(team);
};
getTeamOwner = async (req, res) => {
    const team = await Team.findById(req.params.id)
        .populate({ path: 'user', select: 'userName + email + imageURL' })
        .populate({ path: 'members', select: 'userName + email + imageURL' });

    if (!team) {
        res.status(500).json({ success: false });
    }
    res.send(team.user);
};
getTeamMembers = async (req, res) => {
    const team = await Team.findById(req.params.id).populate({
        path: 'members',
        select: 'userName + email + imageURL'
    });

    if (!team) {
        res.status(500).json({ success: false });
    }
    res.send(team.members);
};

module.exports = {
    createTeam,
    getTeacherTeams,
    addTeamMembers,
    getStudentTeams,
    deleteTeam,
    getTeamById,
    deleteTeamMember,
    getTeamMembers,
    getTeamOwner,
    updateTeam
};
