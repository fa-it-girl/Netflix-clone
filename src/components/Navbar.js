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
     <Link to='/'><img src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='logo' className='img-fluid'></img></Link>
     <Link to='/signin'><button onClick= {toggleButtonHandler} className='btn'>Sing in</button></Link>
    </div>
   )
}

export default Navbar;
