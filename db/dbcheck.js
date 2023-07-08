const { default: mongoose } = require("mongoose")
var url="mongodb+srv://mchandu052524:Chandu25@chandu.lunaa9g.mongodb.net/mycontacts_1?retryWrites=true&w=majority"

console.log("fdfdfdf")
async function fun(){
    await mongoose.connect(url,{
        useNewUrlParser: true
    });
}

var connectUrl=fun()

console.log("fdfdfdf")
console.log(connectUrl)
console.log("fdfdfdf")
