const express = require('express')//express를 가져온다
const app = express()//express를 이용해서 새로운 app만듬
const port = 5000//포트

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://1234:1234@project.o6qfw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('Mongo DB Connected...'))
.catch(err => console.log(err))




app.get('/', (req, res) => res.send('Hello world'));

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));