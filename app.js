
//Setting up Express
const express = require('express');
const app = express();

//Data Parsing for POST Request
app.use(express.urlencoded({extended:true}));

//Requiring Path for EJS files
const path = require('path');
app.set('views engine','ejs');

//Default Path for views folder
app.set("views",path.join(__dirname,"views"));

//Default path for public folder(Serving Static files);
app.use(express.static(path.join(__dirname,"public")));


//***************************************************************** */







app.get('/',(req,res)=>{
    res.send("Server is Working well.");
})










//*************************************************** */
const port = 3000;
app.listen(port,()=>{
    console.log(`listening at port:${port}`);
})