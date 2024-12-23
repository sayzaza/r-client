import Axios from '../lib/axios'

const API_URL = `${process.env.REACT_APP_SERVER_ROOT}/auth/`;

const Signup = (email: string, password: string) => {
  return Axios.post(API_URL + 'signup', {
		email,
		password,
		roles: ['user']
	})
}

const Login = (email: string, password: string, rememberMe: boolean) => {
	return Axios.post(API_URL + 'login', {
		  email,
		  password,
		  rememberMe
	  })
  }

const AuthService = {
	Signup,
	Login
}

export default AuthService;