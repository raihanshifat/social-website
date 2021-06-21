import React from 'react';
import {Container,TextField,Button} from '@material-ui/core'
import { useState,useRef } from "react";
import uploadPic from "../utils/uploadPicToCloudinary";
import { Input,Card,CardMedia } from '@material-ui/core';

// import ImageDropDiv from "../components/Common/ImageDropDiv";
// import axios from "axios";
import baseUrl from "../utils/baseUrl";
import { registerUser } from "../utils/authUser";
const regexUserName = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;
import { Alert, AlertTitle } from '@material-ui/lab'
function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputRef=useRef();

  const { name, email, password} = user;
  const [errorMsg, setErrorMsg] = useState(null);
  const [media,setMedia]=useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  const handleChange=e=>{
    const {name,value,files}=e.target;
    if(name==="media")
    {
      setMedia(files[0]);
      setMediaPreview(URL.createObjectURL(files[0]));
    }
    setUser(prev=>({...prev,[name]:value}))
  }
  const handleSubmit=async e=>{
    e.preventDefault();
    let profilePicUrl;
    if(media!==null)
    {
      profilePicUrl=await uploadPic(media);
    }
    if(media!== null && !profilePicUrl)
    {
      setErrorMsg("Failed to upload photo");
    }
    await registerUser(user,profilePicUrl,setErrorMsg);

  }

    return(
       <Container>
         {/* <Alert severity="error">{errorMsg}</Alert> */}
         {errorMsg? <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {errorMsg}
      </Alert>:
      <>
      </>}
        <form onSubmit={handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="name"
            name="name"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            onChange={handleChange}
          /> 
          <Card>
            <h1>
              Upload Picture
            </h1>
            <input
            type="file"
            accept="image/*"
            onChange={handleChange}
            name="media"
          />
          <CardMedia
          image={mediaPreview}
          title="Profile Picture"
        />
          </Card>  
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary" 
          >
            Register
          </Button>
        </form>
       </Container>
    );
};

export default Signup;