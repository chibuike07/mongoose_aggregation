const { Followers } = require("../model/followers");

module.exports = class FollowerServices {
  createFollowers = async (req, res) => {
    const fansExists = await Followers.findOne({ fans: req.body.fans });
    if (fansExists)
      return res.status(404).json({
        message: "You can only perform this action once",
        status: false,
      });

    try {
      await Followers.create({
        fans: req.body.fans,
        author: req.body.author,
        comment: req.body.comment,
      });

      return res
        .status(201)
        .json({ message: "Thanks for following.", status: true });
    } catch (error) {
      console.error("error: follower", error.message);
    }
  };

  //   getAuthor = async (req, res) => {
  //     const foundAuthors = await Author.aggregate([
  //       {
  //         $match: { _id: { $exists: true } },
  //       },
  //     ]);

  //     if (foundAuthors.length < 1)
  //       return res
  //         .status(404)
  //         .json({ message: "No Authors at the moment", status: false });
  //     return res.status(200).json({ data: foundAuthors, status: true });
  //   };
};
