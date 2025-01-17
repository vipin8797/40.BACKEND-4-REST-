
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

//Requiring UUId for random Id
const { v4: uuidv4 } = require('uuid');

//Requiring Method Override
const methodOverride = require('method-override')
app.use(methodOverride('_method'));
//***************************************************************** */

//Array for database
let posts = [
    {
        id:uuidv4(),
        username:"hellopy",
        content:"I love Coading,"
    },
    {
        id:uuidv4(),
        username:"deltapy",
        content:"Please Mentain Concistency."
    },
    {
        id:uuidv4(),
        username:'coolGye',
        content:"I am a Coll Guy.",
    },
    
];





app.get('/',(req,res)=>{
    res.send("Server is Working well.");
})

//Index Route
app.get('/posts',(req,res)=>{
    res.render('index.ejs',{posts});
})


//Get req for New Content
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})

//Post req for New Content
app.post('/posts',(req,res)=>{
    const {username,content} = req.body;
    const id = uuidv4();
    posts.push({id,username,content});
    res.redirect('/posts');
})



//Get req for show post
app.get('/posts/:id',(req,res)=>{
    const {id} = req.params;

    const postData = posts.find((p) => id === p.id);
    if(postData){
        res.render('show.ejs',{postData});
    }else{
        res.render('wrong Id');
    }
        
   
})


//Get req for Edit form
app.get("/posts/:id/edit",(req,res)=>{
    const {id} = req.params;
    const postData = posts.find((p) => id === p.id);
    res.render('edit.ejs',{postData});
});



app.patch("/posts/:id/edit",(req,res)=>{
       
       const {id} = req.params;
       const post = posts.find((p) => id === p.id);
       post.content = req.body.content;
       res.redirect('/posts');
});


//Delet Req
app.delete('/posts/:id/delete',(req,res)=>{
    const {id} = req.params;
    posts = posts.filter((p) => id != p.id);
    res.redirect('/posts');
    
    
})

//*************************************************** */
const port = 3000;
app.listen(port,()=>{
    console.log(`listening at port:${port}`);
})