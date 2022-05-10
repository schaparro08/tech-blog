

const router = require("express").Router();

// Finish the required pathing for these variables
// const userRoutes = ;
const userRoutes = require('./userRoutes');
// const postRoutes = ;
const postRoutes = require('./postRoutes');

// const commentRoutes = ;
const commentRoutes = require('./commentRoutes')
router.use("/user", userRoutes);
// write the rest of the router.use routes
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);
module.exports = router;