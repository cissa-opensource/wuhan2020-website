import React from 'react';

export default function LoginForm(){
  return(
    <div>
      <form>
        <label>
          Username:
          <input type= "text"/>
        </label>
        <label>
          Password:
          <input type= "text"/>
        </label>
      </form>
    </div>
  )
}
