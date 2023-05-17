import clip from '../../videos/bellachao.mp4';
import './HomePage.css';
import { Link } from 'react-router-dom';
import FetchMoviesHandler from './FetchMovies';

const HomePage = () => {

   return(
    <div className='first-page'>
      <div className='display-none'>
        <div className='casa-de-papel'>
          <img src='https://occ-0-4671-360.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABafd1066jehKE_k4pgxddOTjiH6vRtGQjXTC5rCav3HU4OdVb7YycEEeC9y4z6oC6tLYNGwI7PP4rggrHiqIz-62Vuy9Vk-Gpg63iTiC4xdgjan5qfnHyZpkg_RWQdBLSefuOfkKLw_yibi1ytO7D6aoXCcdGuku8KPZeYkKiC6AdM2r71h6DA.png?r=53c' alt='la casa de papel'></img>
          <h3>La casa de papel</h3>
          <p>Ocho atracadores toman rehenes en la Fábrica Nacional de Moneda y Timbre española. Desde el encierro, su líder manipula a la policía para llevar a cabo un ambicioso plan</p>
          <Link to='https://www.youtube.com/watch?v=U_DQanllAvU'><button>Play</button></Link>
      </div>


      <video width="100%" height='500px' className='video' autoPlay controls >
              <source src={clip} type='video/mp4' />
              {/* <source src={clip} type="video/ogg" /> */}
      </video>

      </div>

    <FetchMoviesHandler />
    </div>
   )
}
export default HomePage;
