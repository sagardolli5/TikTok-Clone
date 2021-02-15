import express from 'express';
import mongoose from 'mongoose';
import dbModel from './dbModel.js'

//app config
const app = express();
const PORT = process.env.PORT || 9000 

//middlware-every request passes through the middleware
app.use(express.json());

//Follwoing line of codes are for security reasons- whenever we recive a request we will be setting the headers to these 'Access-Control-Allow-Origin','*'
//   and 'Access-Control-Allow-Headers','*' which means we accept all the request 
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin','*'),
    res.setHeader('Access-Control-Allow-Headers','*'),
    next()
})
//DB Config
const connection_url = "mongodb+srv://admin:admin@cluster0.t5qlk.mongodb.net/tiktok?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})


//Api Endpoints
app.get('/', (req, res) =>{
    res.status(200).send('Hello World')
})


app.get('/v2/posts', (req, res) => {
    dbModel.find({},(err, data)=>{
        //if you want to retrive everthing from the database use "{}" empty or we don't use any "{}"
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req, res) =>{

    const dbVideos = req.body;

    dbModel.create(dbVideos, (err, data)=>{
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
    });
});




//listener
app.listen(PORT, ()=> {
    console.log(`listening on Port ${PORT}`)
})