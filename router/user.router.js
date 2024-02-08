module.exports = (app) => {
    const userController = require('../controller/user.controller');
    // const companyController = require('../controller/');

    const router = require('express').Router();

    router.get("/",userController.getUserDetails);
    // router.delete("/",companyController.getUserDetails);

    app.use("/api/user",router)
}