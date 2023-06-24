import React, { useRef } from "react";
import Home from "./todo.js";
import './login.css';
function LoginWithLocalStorage(){
    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value=="abc@gmail.com"&&password.current.value=="12345"){
            localStorage.setItem("emailData","abc@gmail.com")
            localStorage.setItem("passwordData","12345")
        }
    }
   
    return(
        <div className="login-container">
      {getEmail && getPassword ? (
        <Home />
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <input placeholder="Enter Your email" type="text" ref={email} />
          </div>
          <div>
            <input placeholder="Enter Your password" type="password" ref={password} />
          </div>
          <button>Login</button>
        </form>
      )}
    </div>
    );
}
export default LoginWithLocalStorage;