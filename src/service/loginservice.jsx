import ApiService from './apiservice';

class LoginServidor extends ApiService {
  constructor() {
    super('/auth');
  }

  autenticar(user) {
    return this.post('', user);
  }
}
export default LoginServidor;
