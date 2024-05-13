import mongoose from "mongoose"
export const dbconnect = ()=>{
    mongoose.connect(process.env.MONGO_URI)
}

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})
export const User = mongoose.models.User ||  mongoose.model('User',UserSchema)


export async function POST(Request) {
     await dbconnect()
    const res = await Request.json()
    const {email,password}= res
    const userdata = await User.findOne({email})
    if(userdata){
        return Response.json({msg:"user already exist",verify:false})
    }else if(!userdata){
        await User.create({email,password})
    return Response.json({msg:"user signup sucessfull",verify:true})

    }

  }


