const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        require:true,
        trim:true
    },
    lname:{
        type:String,
        require:true,
        trim:true
    },
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(validator.isEmail(value)){
                throw new Error("invalid email")
            }
        }
    },
    mobile:{
        type:String,
        require:true,
        unique:true
    },
    messages:[]
})


// save message
userSchema.methods.Messagesave = async function(message){
    try {
        this.messages = this.messages.concat({message});
        await this.save();
        return message;
    } catch (error) {
        console.log(error)
    }
}


// create model
const users = new mongoose.model("users",userSchema);

module.exports = users;