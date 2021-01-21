const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname , '../public')
const templatePath = path.join(__dirname , '../template/views')
const partialPath = path.join(__dirname , '../template/partials')

app.use(express.static(staticPath));    
app.set('view engine' ,'hbs')
app.set('views', templatePath)
hbs.registerPartials(partialPath)


app.get('/',(req,res) =>{
    res.render('index');
})


app.listen(port,() =>{
    console.log(`app is running on port no ${port}`)
})