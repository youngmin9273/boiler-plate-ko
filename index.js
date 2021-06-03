const express = require('express')//express를 가져온다
const app = express()//express를 이용해서 새로운 app만듬
const port = 5000//포트
const bodyParser = require('body-parser');
const {User} = require("./models/User");

const config = require('./config/key');


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json json파일로 된것을 분석해서 가져옴
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(() => console.log('Mongo DB Connected...'))
.catch(err => console.log(err))




app.get('/', (req, res) => res.send('hi world'));

app.post('/register', (req, res) =>{
    //회원가입에 필요한 정보들을 클라이언트에서 가져오면 그것을 데이터베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err, userInfo)=>{
        if(err)return res.json({sucess:false, err});
        return res.status(200).json({
            sucess : true
        });
    });
});

app.listen(port, ()=> console.log(`Example app listening on port ${port}!`));