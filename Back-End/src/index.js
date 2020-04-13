require('./models/User');
require('./models/Track');

const mongoUri='mongodb+srv://admin:admin@cluster0-vkdqu.mongodb.net/test?retryWrites=true&w=majority';

const express= require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const app = express();

const requireAuth = require('./middlewares/requireAuth');

const trackRouters=require('./routes/trackRoutes');
const authRoutes=require('./routes/authRoutes');


app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRouters);

mongoose.connect(mongoUri,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useUnifiedTopology:true
});

mongoose.connection.on('connected',()=>{
  console.log("Mongoose connected successfully")
})

mongoose.connection.on('error',(err)=>{
  console.log(err);
})

app.get('/',requireAuth,(req,res)=>{
  //res.send(`Your email ${req.user.email}`);
  res.send(`Your password ${req.user.password}`);
});

app.listen(3000,()=>{
  console.log("Server is running on port 3000")
}); 