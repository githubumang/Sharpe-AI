import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Data from './component/data/Data';
import Transaction from './component/transaction/Transaction';
import Home from './component/home/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './component/Header';

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() =>{
    const fetchdata = async()=>{
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const data = response.data;
        setPosts(data);
      } catch(error){
        console.log(error);
      }
    }
    fetchdata();
  },[]);

  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/data' element={<Data posts={posts}/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
