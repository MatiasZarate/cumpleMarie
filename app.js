const routes = require("./routes/routes");

const express = require('express');
const app = express();
const path = require("path"); //indispensable para las vistas ejs

const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.use(express.static('public')); //indispensable para usar css
app.set('view engine', 'ejs'); //indispensable para las vistas ejs 
app.set('views', path.join(__dirname, 'views')); //indispensable para las vistas ejs


app.use("/", routes)

app.listen(3001,()=>{
    console.log("apoco si feliz cumple")
})