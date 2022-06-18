import React from 'react';
const Login = (props) => {
    return(
<div>
<form action="/action_page.php">
  <label for="name">UserId:</label><br></br>
  <input type="text" id="name" ></input><br></br>
  <label for="pass">Password:</label><br></br>
  <input type="password" id="pass" ></input><br></br>
  <input type="submit" value="Submit"></input>
</form>
</div>
    )
}
export default Login
