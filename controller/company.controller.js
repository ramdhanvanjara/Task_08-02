const db = require('../models')
const User = db.User;


const removeCompany = async (req,res) =>{
 
    // try {
    //        const user = await User.findAll({
    //     include:db.Company
    //         })
    //         res.json(user)
    // } catch (error) {
    //     res.status(500).json({error:error.message})
    // }
    console.log("Company>>>>>");
}

module.exports = {
    removeCompany 
}