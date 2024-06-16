import ApiService from './apiservice';

class UserService extends ApiService {
  constructor() {
    super('/user');
  }

  salvar(user) {
    return this.post('', user);
  }
}

export default UserService;
