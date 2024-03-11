import { Schema, model, models } from "mongoose";
import bcrypt from 'bcrypt'

const UserSchema=new Schema({
    name:{
        type:String
    },
    username:{
        type:String,
        required:true
    },
    email: {type: String, required: true, unique: true},
    admin:{type:Boolean ,default:false},
    password:{
        type:String,
        required:true,
        validate:password=>{
            if(!password?.length || password.length<4){
                new Error('password must be at least 4 characters')
            }
        }
    }
},{timestamps:true})
UserSchema.post('validate',function(user){
    const password=user.password;
    const salt=bcrypt.genSaltSync(10);
    const hashpssword=bcrypt.hashSync(password,salt)
    user.password=hashpssword
    
})
export const User=models?.User || model("User",UserSchema)