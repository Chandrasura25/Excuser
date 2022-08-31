import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { Route,Routes } from 'react-router-dom'; 
import Navbar from './component/Navbar';
import Excusepage from './component/Excusepage';
function App() {
  const navigate=useNavigate()
  const [excuse, setexcuse] = useState([])
  const [isLoading,setisLoading]=useState(true)
const getExcuse=(inputV)=>{
  const url=`https://excuser.herokuapp.com/v1/excuse/${inputV}`
  axios.get(url).then((result)=>{
    console.log(result.data);
    setexcuse(result.data);
    setisLoading(false)
  })
  navigate('/excuse')
  console.log(url);
}
  return (
    <>
    <h3>Excuse App</h3>
    <Routes>
      <Route path='/' element={<Navbar  getExcuse={getExcuse}/>}></Route>
      <Route path='/excuse' element={<Excusepage excuse={excuse} isLoading={isLoading} />}></Route>
    </Routes>
    </>
  );
}
export default App;
