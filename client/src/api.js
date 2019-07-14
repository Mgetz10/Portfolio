import axios from "axios";
axios.defaults.withCredentials = true;

const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? "/api"
      : "http://localhost:5000/api",
  withCredentials: true
});

// const errHandler = err => {
//   console.error(err);
//   if (err.response && err.response.data) {
//     console.error('API response', err.response.data);
//     throw err.response.data.message;
//   }
//   throw err;
// };

export default {
  service: service
  // signup(userInfo) {
  //   return service
  //     .post('/signup', userInfo)
  //     .then(res => {
  //       // If we have localStorage.getItem('user') saved, the application will consider we are loggedin
  //       localStorage.setItem('user', JSON.stringify(res.data));
  //       return res.data;
  //     })
  //     .catch(errHandler);
  // },
};
