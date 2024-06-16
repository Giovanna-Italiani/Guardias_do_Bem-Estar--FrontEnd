import axios from 'axios';

const httpUser = axios.create({
  baseURL: 'http://localhost:8080',
});

class ApiService {
  constructor(apiurl) {
    this.apiurl = apiurl;
  }

  post(url, objeto) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpUser.post(requestUrl, objeto);
  }

  delete(url) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpUser.delete(requestUrl);
  }

  get(url) {
    const requestUrl = `${this.apiurl}${url}`;
    return httpUser.get(requestUrl);
  }
}

export default ApiService;
