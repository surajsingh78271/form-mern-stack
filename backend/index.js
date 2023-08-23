import  express  from "express";
import cors from "cors"
import connectionDatabase from "./db/connectionDatabase.js";
import formModel from "./db/formSchema.js";




const app = express()
app.use(cors())

const PORT = 8080;
connectionDatabase()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const submitController = async (req,res)=>{
    // console.log(req.query)
    // console.log("form handleing")
    // console.log(req.body)
    let doc = await new formModel({
        fname:req.body.fname,
        lname:req.body.lname,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender,
        age:req.body.age,
        check:req.body.checkbox
    })
    await doc.save();
    res.send({
        result:"Your information is saved in database."
    })

}
const getData = async (req,res)=>{
    let respone = await formModel.find()
    res.send(respone)


}

app.get("/",(req,res)=>{
   res.send(  "Home page")
})

app.post("/form",submitController)
app.get("/getdata",getData)



app.listen(PORT,()=>{
    console.log("backend working")
})

