// // import React from 'react'

// // import { useFormik } from 'formik'
// // import { Button } from '@mui/material'
// // import { Input, Row } from 'antd'
// // import { ErrorSharp } from '@mui/icons-material'
// // const LoginForm = () => {
// //      const formik = useFormik({
// //          initialValues:{
// //              name:"",
// //              password:""
// //          },
// // onSubmit:(values)=>{
// //      alert(JSON.stringify(values,null,2));
// //     console.log("form",values);

// // },
// // validate:(values)=>{
// //     let errors ={};
// //     if(!values.name){
// //         errors.name= "Please Enter your name"
// //     }
// //      if(!values.password){
// //              errors.password= "Required";

// //      } else if(!/^[A-Z0-9._%+-]{2,4}$/i.test(values.password)){
// //         errors.password= "Please Enter passwords"

// //      }
// //       return errors;
// // }






// //      })
// //   return (
// //     <>
// //     <Row>
// //     <form autoComplete='off' onSubmit={formik.handleSubmit}>
// // <Input type ="text" name ="name" id ="name" placeholder='EnterName' values= {formik.values.name} onChange={formik.handleChange}/>
// //   {formik.errors.name ? <div style ={{color:'red'}}>{formik.errors.name}</div> :<div style ={{color:"green"}}> Matched</div>}
// // <Input type ="password" name ="password" placeholder='Password' id="password"values={formik.values.password} onChange={formik.handleChange}/>
// // {formik.errors.password ? <div style ={{color:'red'}}>{formik.errors.password}</div> :<div style={{color:"green"}}> matched</div>}

// // <Button type="submit">Submit</Button>
// // <Button>Signup</Button>
// //     </form>
// //     </Row>
    
    
// //     </>
// //   )
// // }

// // export default LoginForm


// import React from 'react'
// const LoginForm = () => {
//      const [data, setData] = React.useState({
//          email:"",
//          password:""
//      })
//       const {email, password}= data;
//       const handlechange = (e)=>{

//  setData({...data,[e.target.name]:e.target.value})

//       }

//       const signup =(e)=>{
//            e.preventDefault();
           
//       }
//       const signIn =(e)=>{
//         e.preventDefault()
//    }


//   return (
//     <>LoginForm
//   <form autoComplete='off'>
//       <input type="text" name="email" value={email} onChange={handlechange}placeholder='usrname' required/>
//       <input type="password" name="password" value={password} onChange={handlechange}placeholder='passowrd' required/>
// <button type="submit" onClick={()=>signup()}>Signup</button>
// <button type="submit">SignIn</button>

//   </form>


//     </>
//   )
// }

// export default LoginForm
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
      <TextField  fullWidth type ="text" value ={email} onChange={(e)=>setEmail(e.target.value)}/>
      <Typography variant="h4">Password</Typography>
      <TextField  fullWidth type="passowrd" value ={password} onChange={(e)=>setPassword(e.target.value)}/>
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