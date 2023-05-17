import tv from '../images/tv.svg';
import popcorn from '../images/popcorn.svg';
import globe from '../images/crystalball.svg';
import download from '../images/download.svg'
import './HomePageGrid.css';

const HomePageGrid = () => {
   return(
    <div className='second' >
      <div className='Homepage-grid'>
      <div className='grid-item'>
        <img style={{marginTop: '70px'}}src={tv} alt='tv'></img>
        <h1>Enjoy on your TV</h1>
        <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
      </div>
      <div className='grid-item '>
      <img src={popcorn} alt='tv'></img>
        <h1>Watch everywhere</h1>
        <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>

      </div>
      <div className='grid-item'>
      <img src={globe} alt='tv'></img>
        <h1>Create profiles for kids</h1>
        <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
       </div>
        <div className='grid-item '>
        <img src={download} alt='tv'></img>
          <h1>Download your shows to watch offline</h1>
          <p>Only available on ad-free plans.</p>

        </div>
    </div>
    </div>

   )
}
export default HomePageGrid;
