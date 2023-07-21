import Axios from 'axios';
import VueCookies from 'vue-cookies';
import router from '../router';

const APIBaseURL = process.env.VUE_APP_BADGE_GENERATOR_URL;

const adapter = Axios.create({
  baseURL: APIBaseURL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: process.env.VUE_APP_BADGE_GENERATOR_KEY,
  },
});

function eachRecursive(obj) {
  for (var k in obj) {
    if (typeof obj[k] == 'object' && obj[k] !== null) eachRecursive(obj[k]);
    else if (obj[k] == null) obj[k] = '';
  }
}

export default {
  install(app) {
    adapter.interceptors.response.use(
      (response) => {
        eachRecursive(response.data);
        return response;
      },
      (error) => {
        if (error.reponse) {
          if (
            error.response.status === 404 ||
            error.response.status === 401 ||
            error.response.status === 500 ||
            error.response.status === 503
          ) {
            VueCookies.remove('token');
            router.push('/');
          }
        }

        if (error.message === 'Network Error') {
          console.log("Can't reach server");
          router.push('/');
        }

        return Promise.reject(error);
      }
    );

    var api = {
      createSerialNumberVPRequest(body) {
        return adapter.post(`/auth/request/serialnumber`, body);
      },
    };
    app.provide('api', api);
  },
};
