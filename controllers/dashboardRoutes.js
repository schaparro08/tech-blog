const router = require("express").Router();
const { Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
    // we want to go ahead and finishing the routing to get all the posts
    try {
        // Get all projects and JOIN with user data
        const postsData = await Post.findAll({
          include: [
            {
              model: Post,
              attributes: ['name'],
            },
          ],
        });
    
        // Serialize data so the template can read it
        const projects = projectData.map((project) => project.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('homepage', { 
          projects, 
          logged_in: req.session.logged_in 
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/new", withAuth, (req, res) => {
// for showing new posts to the user
})

router.get("/edit/:id", withAuth, async (res, req) => {
    // To be able to find posts by primary key and render the edit post on the dashboard
})

module.exports = router;