module.exports = (app) => {
    const companyController = require('../controller/company.controller');

    const router = require('express').Router();

    router.delete("/",companyController.removeCompany);

    app.use("/api/company",router)
}