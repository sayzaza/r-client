import axios from 'axios';

const Axios = axios.create({
	responseType: 'json'
})

Axios.interceptors.request.use((options: any) => {
  options.withCredentials = true;
  return options;
});

Axios.interceptors.response.use((response) => response.data);

export default Axios;