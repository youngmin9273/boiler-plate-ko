const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type : String,
        maxlength : 50
    },
    email : {
        type : String,
        trim : true,//스페이스바 삭제
        unique : 1 //중복 값 사용불가
    },
    password : {
        type : String,
        minlength : 5
    },
    lastname : {
        type : String,
        maxlength : 50
    },
    role : {//관리번호
        type : Number,
        default : 0 //지정하지 않으면 0으로 주겠다.
    },
    image : String,
    token : {//유효성 관리 
        type : String
    },
    tokenExp : {//토큰 유효기간
        type : Number
    }
})

const User  = mongoose.model('User', userSchema)

module.exports = {User}//다른곳에서 사용가능하게 module 에 넣어둠