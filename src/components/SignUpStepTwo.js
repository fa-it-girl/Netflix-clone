import SecondNavbar from "./SecondNavbar";
import './SignUpStepOne.css'
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignUpStepTwo = (props) => {
  const navigate = useNavigate();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [validPassword, setValidPassword] = useState(true)

  const passwordHandler =(event) => {
    setEnteredPassword(event.target.value)
  }

  const submitPasswordHandler = (event) =>{
    event.preventDefault();
    if (enteredPassword.trim() !== '' && enteredPassword.length >= 6){
      navigate('/movies')
    }

    setValidPassword(false)
  }

  return(
    <>
    <SecondNavbar />
    <hr />
    <div className="stepOne">
      <p>STEP 2 OF 2</p>
      <h1>Welcome back!</h1>
      <h1>Joining Netflix is easy.</h1>
      <p>Enter your password and you'll be watching in no time.</p>
      <form onSubmit={submitPasswordHandler}>
        <input type='password' name='password' placeholder='Enter Your Password' onChange={passwordHandler}></input><br />
        {!validPassword && <p className="password-validity">Password is not valid, needs to be at least 6 character</p>}
        <button>Next</button>
      </form>

    </div>

    </>
  )

}

export default SignUpStepTwo;
