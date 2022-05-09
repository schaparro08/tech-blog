const { Model } = require("sequelize/types");

// Write some authentication for the login
const withAuth = (req, res, next) => {
// if (condition) - if you are not logged in 
// then redirect to the login page
// else move on to dashboard
};

Model.exports = withAuth;