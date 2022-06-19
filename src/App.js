import logo from './logo.svg';
import './App.css';
import { product } from './api/api';
import { useEffect } from 'react';

function App() {
const getdata=async()=>{
  try {
    const response=await product();
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

useEffect(()=>{
  getdata();
},[])



  return (
    <div className="App">
      
    </div>
  );
}

export default App;
