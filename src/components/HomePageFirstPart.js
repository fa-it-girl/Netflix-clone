import './HomePageFirstPart.css'
import HomePageGrid from './HomePageGrid';
import Questions from './Questions';
import {Fragment, useState} from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

function HomePageFirstPart() {
  const navigate = useNavigate();
  const [enteredEmail, setEnteredEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  // const [validForm , setValidForm] = useState(true)

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredEmail.trim() !== '') {
      navigate('/signup/info');

    }
    setValidEmail(false)

  };

  const onChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    setValidEmail(validateEmail(event.target.value));
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <Fragment>
      <div >
        <div className="homepage">
      <Navbar/>

        <div className='firstpage'>
          <h1>Unlimited movies, TV shows, <br />and more</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <h3 >Ready to watch? Enter your email to create or restart your membership.</h3>
          <form onSubmit={formSubmitHandler}>
            <input type='email' name='email' placeholder='Email address' value={enteredEmail} onChange={onChangeHandler} />
            <button type="submit">Get started</button>
            {!validEmail &&  (
              <p className='valid-email'>Please provide a valid email</p>
            )}
          </form>
        </div>
        <HomePageGrid />
        <Questions />
      </div>
      </div>


    </Fragment>

  );
}

export default HomePageFirstPart;
