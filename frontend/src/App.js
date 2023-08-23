
import './App.css';
import {useState} from "react"
import Signup from './signupForm';
import Table from './table';

function App() {
  const [isFalse, setIsFalse] = useState(false)
  const [data, setData] = useState([])
  

  const handleData = async ()=>{
    if(isFalse){
      setIsFalse(false)
    }else{

    let data = await fetch("http://localhost:8080/getdata").then((val)=>{
        return val.json()
      }).then((val)=>{
        console.log(val)
        
        return val
      })
      setData(data)
      // console.log(data)

      setIsFalse(true)

    }
  }
  return (
    <div className="app">
      <button className='app-button' onClick={()=>{handleData()}}>Data</button>
      {
        isFalse?(<Table data={data} />):(<Signup />)
      }
      
    </div>
  );
}

export default App;
