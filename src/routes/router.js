import Navigo from 'navigo';
import { changePage } from '../utils/change-page';
import { loginForm } from '../templates/login';
import { home } from '../templates/home';
export const router = new Navigo('/');

router.on('/', () => {
  changePage(home);
}).on('/login', () => {
  changePage(loginForm);
});
