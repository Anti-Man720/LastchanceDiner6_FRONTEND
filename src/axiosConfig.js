import axios from 'axios';

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production' ? 'https://git.heroku.com/capstone-backend2.git' : '/';