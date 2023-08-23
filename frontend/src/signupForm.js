import './signupForm.css';
import {useState} from "react"

function Signup() {
  const [fname, setFname] = useState("")
  const [lname, setLname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [gender,SetGender] = useState("")
  const [date, setDate] = useState()
  const [check,setCheck] = useState(false)
  // const [age,setAge] = useState()
  const [indicator,setIndicator] = useState("")




  const handle = (e)=>{
    e.preventDefault()
    let today = new Date()
    let bday = new Date(date)
    let age1 ={
        
    }
    age1.year = today.getFullYear() - bday.getFullYear()
    age1.month = today.getMonth() - bday.getMonth()
    console.log(age1.year)
    if(age1.year>18){
        console.log(age1.year)
      
      let data = fetch("http://localhost:8080/form",{
      method:"post",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        fname:fname,
        lname:lname,
        email:email,
        password:password,
        gender:gender,
        age:age1.year,
        checkbox:check
      }),
      mode:"cors"
      
    }).then((val)=>{
      return val.json();

    }).then((val)=>{
      console.log(val)
      setTimeout(()=>{
        setIndicator("")
    },3000)
      setIndicator(val.result)
    })

    }else{
        setTimeout(()=>{
            setIndicator("")
        },3000)
      setIndicator("Age should be above than 18.")

    }
    


  
  }
  return (
    <div className="signup">
      <div className='signup-content'>
      <h1>Signup</h1>
      <form  onSubmit={(e)=>{handle(e)}} >
        <label htmlFor="name">First Name: </label>
        <input type="text"  id="fname" required onChange={(e)=>{setFname(e.target.value)}} />
        <br />
        <br />
        <label htmlFor="name">Last Name: </label>
        <input type="text"  id="lname" required onChange={(e)=>{setLname(e.target.value)}} />
        <br />
        <br />

        <label htmlFor="email">Email Id: </label>
        <input type="email" id="email" required  onChange={(e)=>{setEmail(e.target.value)}}  />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" required onChange={(e)=>{setPassword(e.target.value)}} />
        <br />
        <br />
        <input type="radio" name="gender" id="male" onClick={(e)=>{SetGender("male")}} />
        <label htmlFor="male">Male</label>
        
        <br />
        <input type="radio" name="gender" id="female"  onClick={(e)=>{SetGender("female")}} />
        <label htmlFor="female">Female</label>
        
        
        
        <br /><br />
        <input type="date" required onChange={(event) => setDate( event.target.value)}/>
        {/* <input type="date" name="dob" onClick={(e)=>{setDate(e.target.value)}} /> */}
        <br /><br />
        <input type='checkbox' name="checkbox" onChange={(e)=>{setCheck(e.target.checked)}} required /><label>Terms and condition.</label>
        <br />
        <br />
        <div className='button-div'>
        <button>Submit</button>
        </div>
      </form>
      <br />
      {indicator}
      </div>

    </div>
  );
}

export default Signup;