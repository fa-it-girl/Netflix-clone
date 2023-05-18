import SecondNavbar from './SecondNavbar';
import { Link } from 'react-router-dom';
import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SingIn = () => {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const[validEmail, setValidEmail]= useState(true);
  const[validPassword, setValidPassword] = useState(true);

  const enteredMailHandler = (event) =>{
      setEnteredEmail(event.target.value)
  }

  const enteredPasswordHandler = (event) => {
    setEnteredPassword(event.target.value)
  }

  const submitHandler = (event) => {
      event.preventDefault();
      if(enteredEmail.trim() !== '' && enteredPassword.trim() !== ''){
        // setValidEmail(true)
        // setValidPassword(true)
        navigate('/movies')
      }

      setValidEmail(false)
      setValidPassword(false)
  }

  return(
    <div className='form-background'>
      <SecondNavbar />
      <div className='form'>
         <div>
           <h2>Sign in</h2>
      </div>
        <form onSubmit={submitHandler}>
        <div className='form-items'>
          <input type='email' name='email' placeholder='Enter your email' onChange={enteredMailHandler}></input><br />
          {!validEmail && <p className='error-message'>Add email</p>}
          <input type='password' name='password' placeholder='Enter your password' onChange={enteredPasswordHandler}></input><br />
          {!validPassword && <p className='error-message'>Add password</p>}
          <button className='submit-form' type='submit' >Sign in</button><br />
          <div className='extra'>
            <div className='checkbox'>
              <input type='checkbox' name='checkbox'></input><label className='remember'>Remember me</label>
            </div>

            <h4 className='new-in-net'>New to Netflix? <Link to='/'><span className='linksignup' >Sing up now</span></Link></h4>
            <p className='new-in-net1'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
          </div>

        </div>
      </form>
      </div>

    </div>
  )
}

export default SingIn;
 /* <div style={{height:'600px',width: '400px',marginLeft:'auto', marginRight:'auto', border:'1px solid black', backgroundColor:'black', opacity:'0.9'}}>
      <h2 style={{textAlign:'center', color:'white'}}>Sing in</h2>
      <form >
        < div>
          <input style={{width:'300px',height:'40px', marginLeft:'50px', marginTop:'30px', borderRadius: '5px', backgroundColor:'grey'}}type='email' name='email' placeholder="Email"/><br />
          <input  style={{width:'300px',height:'40px', marginLeft:'50px',marginTop:'30px', borderRadius: '5px' , backgroundColor:'grey'}}type="password" name='password' placeholder="Password"/><br />
          <Link to='/movies'><button style={{width:'305px',
                          marginLeft:'50px',
                          backgroundColor:'red',
                          border:'none',
                          height:'40px',
                          marginTop:'50px',
                          borderRadius: '5px',
                          color:'white',
                          fontSize:'15px',
                          marginBottom:'10px'}} type='button' name='button'>Sign in</button></Link><br/>

        </div>
      </form>
    </div>*/
