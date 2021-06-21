import React,{useState} from 'react';
import {Container,TextField,Button,FormControl} from '@material-ui/core'
import {loginUser} from "../utils/authUser";
import { Alert, AlertTitle } from '@material-ui/lab'





function Login()
{
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [errorMsg, setErrorMsg] = useState(null);
  const handleChange=(e)=>{
    const {name,value}=e.target
    setUser(prev=>({
      ...prev,[name]:value
    }))
  }
  const handleSubmit=async e=>{
    e.preventDefault();
    await loginUser(user,setErrorMsg);

  }
    return(
      <div className="image_background">
        
       <Container>
         {errorMsg? <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        {errorMsg}
      </Alert>:
      <>
      </>}
         <FormControl>
        <form onSubmit={handleSubmit}>
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={handleChange}
            name="password"
            label="Password"
            type="password"
            id="password"
          />    
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            
            Sign In
          </Button>
        </form>
        
        </FormControl>
       </Container>
       
       </div>
    );
};

export default Login;