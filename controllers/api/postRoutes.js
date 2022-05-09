const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    // Create a post
    try {
        const newPost = await Post.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newPost);
      } catch (err) {
        res.status(400).json(err);
      }
    //complete the asynchronyous function with error handeling
});

router.put("/:id", withAuth, async (req, res) => {
    // Update a post
    try {
        const postInfo  = await Post.update({
            where: {
                id: req.params.id,
              },
        });
        res.status(200).json(postInfo);
      } catch (err) {
        res.status(400).json(err);
      }
    //complete the asynchronyous function with error handeling
});

router.delete("/:id", withAuth, async (req, res) => {
    // Delete the post
    try {
        const postData = await Post.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });
    
        if (!postData) {
          res.status(404).json({ message: 'No post found with this id!' });
          return;
        }
    
        res.status(200).json(postData);
      } catch (err) {
        res.status(500).json(err);
      }
    });
    //complete the asynchronyous function with error handeling


module.exports = router;