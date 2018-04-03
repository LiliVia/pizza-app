import Login from './components/login/Login';
import Signup from './components/signup/Signup';


const routes = [
  {
    component: Signup,
    href: '/signup',
    // onEnter: navigateTo => {
    //   navigateTo('/login');
    // },
  },
  {
    component: Login,
    href: '/login',
  },
  {
    href: '',
    redirectTo: '/login',
  }
];

export default routes;
