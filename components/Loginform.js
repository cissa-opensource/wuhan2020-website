import React from 'react';
import {useInput} from '../modhooks/useInput';

export default function LoginForm(){
  const {value:username, reset:resetUsername, bind:bindUsername}= useInput("");
  const {value:password, reset:resetPassword, bind:bindPassword}= useInput("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    resetUsername;
    resetPassword;
  }

  return(
    <div>
      <form>
        <label>
          Username:
          <input
            type= "text" {...bindUsername}/>
        </label>
        <label>
          Password:
          <input
            type= "Password" {...bindPassword}/>
        </label>
        <input type= "submit" value="Login"/>
      </form>
    </div>
  )
}
