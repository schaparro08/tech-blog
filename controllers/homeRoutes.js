const router = require("express").Router();
const { Post, Comment, User } = require("../models");

router.get("/", async (req, res) => {
    // get all posts for the homepage
    try {
        const postsData = await Post.findAll({
          include: [User], 

        });
        const post = postsData.map((post) => post.get({ plain: true }));
    
        res.render('posts', {
          post
        });
      } catch (err) {
        res.status(500).json(err);
      }
    });

router.get("/post/:id", async (req, res) => {
    // get a single post
    try {
        const postsData = await Post.findByPk(req.params.id, {
          include: [
            {
              model: User,
              attributes: ['username'],
            },
          ],
        });
    
        const project = projectData.get({ plain: true });
    
        res.render('project', {
          ...project,
          logged_in: req.session.logged_in
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get("/login", (req, res) => {
    // login
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get("/signup", (req, res) => {
    // signup
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    } res.render('signup');
})

module.exports = router;