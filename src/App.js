
import './App.css';
 import HomePageFirstPart from './components/HomePageFirstPart';
import Questions from './components/Questions';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root'
import SingIn from './components/SingIn';
import SignUpStepOne from './components/SignUpStepOne';
import SignUpStepTwo from './components/SignUpStepTwo';
import { Provider } from 'react-redux';
import { store } from './store/index'
import HomePage from './components/movies/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  // const users = [{
  //   id: Math.random().toString(),
  //   email: '',
  //   password: ''
  // }]

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {path: '/', element: <HomePageFirstPart />},
        {path: '/questions', element: <Questions />},
        {path: '/signin', element: <SingIn />},
        {path: '/signup/info', element: <SignUpStepOne />},
        {path: '/signup/info/password', element: <SignUpStepTwo />},

      ],


    },
    {
      path:'/',
      element: <Root />,
      children: [
        {path: '/movies', element: <HomePage />}
      ]

    }

  ])
  return (
    <Provider store= {store}><RouterProvider router={router} /></Provider>

  );
}

export default App;
