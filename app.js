const express=require('express')
const morgan=require('morgan') 
const mongoose=require('mongoose')
const blogRoutes=require('./routes/blogRoutes')

const app=express()
//connect to mongodb
const dbURI='mongodb+srv://ntb:outlandermongodb1915@nodetuts.j0bjr.mongodb.net/nodetuts?retryWrites=true&w=majority'
mongoose.connect(dbURI,{useNewUrlParser:true,useUnifiedTopology:true})
 .then((result)=>app.listen(3000))
 .catch((err)=>console.log(err))
// register ejs
app.set('view engine','ejs')



//Listen for requests


//Middleware and static files
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))



app.get('/',(req,res)=>{
//res.send('<p>Home Page</p>')
res.redirect('/blogs')

})


app.get('/about',(req,res)=>{
  //  res.send('<p>About Page</p>')
  res.render('about',{title:'About'})
    })
    // blog routes




    app.get('/about-us',(req,res)=>{
        //  res.send('<p>About Page</p>')
        res.redirect('/about')
          })
         
          app.use('/blogs' ,blogRoutes)
//404 
    app.use((req,res)=>{
        res.status(404).render('404',{title:'404'})
    })