
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

//Array for database
let posts = [
    {
        username:"hellopy",
        content:"I love Coading,"
    },
    {
        username:"deltapy",
        content:"Please Mentain Concistency."
    },
    {
        username:'coolGye',
        content:"I am a Coll Guy.",
    },
    {
        username:"chillGuye",
        content:"I am a Chill Guy."
    }
];





app.get('/',(req,res)=>{
    res.send("Server is Working well.");
})

//Index Route
app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
})










//*************************************************** */
const port = 3000;
app.listen(port,()=>{
    console.log(`listening at port:${port}`);
})