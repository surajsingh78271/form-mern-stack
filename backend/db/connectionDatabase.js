import mongoose from "mongoose"

const connectionDatabase = async ()=>{
    return await mongoose.connect("mongodb://localhost:27017",{
        dbName:"formDB"   
    }).then(()=>{
        console.log("database connected")
    }).catch((error)=>{
        console.log(error)
    })
}

export default connectionDatabase