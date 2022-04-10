
import React from 'react';
import Home from './Home';
import Login from './Login';
import Dashboard from './Dashboard';
import Chatbot from './Components/Chatbot/Chatbot';
import Prev_Queries from './Prev_Queries';
import Profile_Edit from './Profile_Edit';
import Request_Leave from './Request_Leave';
import Resetpass from './Resetpass';
import { Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';


function App() {
  return (
    <>
    <Navbar></Navbar>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/profile_edit' element={<Profile_Edit/>}/>
        <Route path='/request_leave' element={<Request_Leave/>}/>
        <Route path='/prev_queries' element={<Prev_Queries/>}/>
        <Route path='/Resetpass' element={<Resetpass/>}/>
      </Routes>
      
    
    </>
  );
}

export default App;
