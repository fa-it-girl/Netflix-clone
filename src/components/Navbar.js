import './Navbar.css';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { uiAction } from '../store/ui-slice'

const Navbar = () => {

  const dispatch = useDispatch()

  const toggleButtonHandler = () => {
    dispatch(uiAction.toggle)
  }
   return(
    <div className="navbar">
     <Link to='/'><img src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo' className='img-fluid'></img></Link>
     <Link to='/signin'><button onClick= {toggleButtonHandler} className='btn'>Sing in</button></Link>
    </div>
   )
}

export default Navbar;
