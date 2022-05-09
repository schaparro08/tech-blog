const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
    // Create a post
    //complete the asynchronyous function with error handeling
});

router.put("/:id", withAuth, async (req, res) => {
    // Update a post
    //complete the asynchronyous function with error handeling
});

router.delete("/:id", withAuth, async (req, res) => {
    // Delete the post
    //complete the asynchronyous function with error handeling
});

module.exports = router;