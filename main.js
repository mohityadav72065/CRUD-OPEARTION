import express from 'express';
const app = express();
const port = 4000;
import route from './routes/route.js';
import connectDB from './connectDB/connectdb.js'; 
import bodyParser from 'body-parser';
connectDB();
//body -parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//setup for ejs template file
app.set("view engine","ejs");
app.set("views","./views");
// serve static files from the `public` directory
app.use(express.static('public'));
//route
app.use('/',route);
// (Optional) you can keep other routes below; avoid overriding '/'
// app.get('/', (req, res) => { res.send("hello") });
app.listen(port, () => {       
    console.log(`server is running at http://localhost:${port}`)
});