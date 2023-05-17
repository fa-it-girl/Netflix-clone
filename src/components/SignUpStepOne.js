import SecondNavbar from "./SecondNavbar";
import image from '../images/step1.png';
import './SignUpStepTwo.css';
import { Link} from 'react-router-dom'

const SignUpStepTwo = () => {
  return(
    <>
    <SecondNavbar />
    <hr />
    <div className='SingUpInfo'>
      <img src={image} alt='step1image'></img>
      <p>STEP 1 OF 2</p>
      <h1>Finish setting up your account</h1>
      <p>Netflix is personalized for you. Create a password to start watching Netflix.</p>
      <Link to='/signup/info/password'><button >Next</button></Link>

    </div>
    </>
  )

}

export default SignUpStepTwo;
