 const express = require('express');
 const bodyParser = require('body-parser');
 
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

const db = require('./models/index.js')

// db.sequelize.sync({force: true})

// (async()=>{
//     try {
//         // await sequelize.sync();
//         console.log('Database syncronized successfully');
//     } catch (error) {
//         console.log('Error syncronized database:',error);
//     }
// })();
require("./router/user.router.js")(app)
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
});
