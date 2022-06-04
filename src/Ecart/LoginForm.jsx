import React, { useState } from 'react'
import {auth} from './Firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Row } from 'react-bootstrap';
import { Button, TextField, Typography } from '@mui/material';

const LoginForm = () => {
   const [email,setEmail]=useState('')
   const [password, setPassword]=useState('')
    const [user,setUser] = useState({});
     onAuthStateChanged(auth, (currentuser)=>{
         setUser(currentuser);
     })


const register = async(e)=>{
 e.preventDefault()
  try{
      const user = createUserWithEmailAndPassword(auth,
        email, password)
         console.log(user)
  }catch(error){
    alert (error.message)
  }
  alert("successFull")


}


 const logout = async (e)=>{
    e.preventDefault()
    await signOut(auth);
 }

  const login =  async (e)=>{
     e.preventDefault()
      try{
        const  user = signInWithEmailAndPassword(auth, email, password) 
             console.log(user)   
      } catch (error){
        console.log(error.message)
      }

  }

  return (
    <>
    <Row>
    <Typography variant="h2" className='text-center'>LoginForm </Typography>
          <Typography variant='h4'> {user?.email} </Typography>

    <form autoComplete='off'>
          <Typography  variant="h4">Email</Typography>
      <TextField  fullWidth type ="text" value ={email} onChange={(e)=>setEmail(e.target.value)} required/>
      <Typography variant="h4">Password</Typography>
      <TextField  fullWidth type="passowrd" value ={password} onChange={(e)=>setPassword(e.target.value)} required/>
      <Button variant="outlined"   color ="success"onClick={login}>Sign In</Button>
      <p>  Dont have An Account create Account</p>
      <Button  color="secondary" style ={{width:"50%"}} onClick={register}>Create New  Account</Button>
      <Button color="error" onClick={logout}>Log Out</Button>
    </form>

    </Row>

    
    </>
  )
}

export default LoginForm