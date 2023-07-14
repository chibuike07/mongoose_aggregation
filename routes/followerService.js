const FollowerServices = require("../controller/FollowersService");

const FollowerRouter = require("express").Router();
const follower = new FollowerServices();

FollowerRouter.route("/follow").post(follower.createFollowers);

module.exports = { FollowerRouter };
