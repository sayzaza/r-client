import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import AuthService from '../../services/auth.service'
import Logo from '../../assets/images/logo.png';
import Card from '../../assets/images/card.png';
import { ISetSubmitting } from '../Login';
import { showLoading, hideLoading } from '../../lib/uiService';
import Alert from '../../components/Alert';

interface ISignupValues {
  email: string;
  password: string;
  repassword: string;
  agree: boolean;
}

const SignupPage: React.FC = () => {
	const [message, setMessage] = useState<string>('');
	const [success, setSuccess] = useState<boolean>(false);

	const handleSubmit = (values: ISignupValues, { setSubmitting }: ISetSubmitting) => {
		if (values.password !== values.repassword) {
			setMessage(`password doesn't match`);
			setSuccess(false);
			return;
		}
		if (values.agree !== true) {
			setMessage(`Please check agreement to sign up`);
			setSuccess(false);
			return;
		}
		showLoading();
		AuthService.Signup(values.email, values.password).then(
			(response) => {
        hideLoading();
        console.log('response =>', response)
				setMessage(response.toString());
				setSuccess(true)
        window.location.href = '/login';
			},
			(error) => {
        hideLoading();
				const resMessage = (error.response && error.response.data) || error.message || error.toString();
				setMessage(resMessage);
				setSuccess(false);
				setSubmitting(false)
			}
		)
	}

	return (
		<div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
      <div className="relative flex items-center xl:px-36 px-11">
        <div className="absolute top-7 left-9">
          <img src={Logo} alt="logo" />
        </div>
        <div className="w-full">
          {message && <Alert message={message} success={success} />}
          <h1 className="text-4xl font-semibold mb-4">Register</h1>
          <p className="text-base font-medium mb-10">Welcome. Please enter your details.</p>
          <Formik
            initialValues={{ email: '', password: '', repassword: '', agree: false }}
						validationSchema={Yup.object({
							email: Yup.string().email('Invalid email address').required('Required'),
							password: Yup.string()
								.max(40, 'Password must be between 6 and 40 characters')
								.min(6, 'Password must be between 6 and 40 characters')
								.required('Required'),
							repassword: Yup.string().required('Required')
						})}
            onSubmit={(values, { setSubmitting }) => {
							handleSubmit(values, { setSubmitting })
						}}
          >
            <Form>
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">
                  <label htmlFor="email">Email</label>
                </div>
                <Field
                  name="email"
                  type="email"
                  className="border border-[#D2D4D8] rounded-lg pl-4 py-3.5 text-base text-[#6D717D] w-full"
                  placeholder="Enter your email"
                />
                <div className="text-red-600 text-xs">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="mb-7">
                <div className="text-sm font-medium mb-2">
                  <label htmlFor="password">Password</label>
                </div>
                <Field
                  name="password"
                  type="password"
                  className="border border-[#D2D4D8] rounded-lg pl-4 py-3.5 text-base text-[#6D717D] w-full"
                  placeholder="Enter your password"
                />
                <div className="text-red-600 text-xs">
                  <ErrorMessage name="password" />
                </div>
              </div>

              <div className="mb-7">
                <div className="text-sm font-medium mb-2">
                  <label htmlFor="repassword">Confirm Password</label>
                </div>
                <Field
                  name="repassword"
                  type="password"
                  className="border border-[#D2D4D8] rounded-lg pl-4 py-3.5 text-base text-[#6D717D] w-full"
                  placeholder="Confirm your password"
                />
                <div className="text-red-600 text-xs">
                  <ErrorMessage name="repassword" />
                </div>
              </div>

              <div className="flex items-center text-[#6d717d] text-sm font-semibold mb-7">
                <Field name="agree" type="checkbox" className="w-4 h-4 border border-[#D2D4D8] rounded mr-2.5" />
                	I have read and accept the terms and conditions
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-white text-base font-bold rounded-lg bg-[#773EE2] mb-3.5"
              >
                Create account
              </button>

              <div className="text-[#6D717D] text-sm flex justify-center">
                <p>
									Already have an account?{' '}
                  <a href="/login" className="text-[#773EE2] font-semibold">
                    Login
                  </a>
                </p>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div className="justify-center items-center bg-[#F3F5F8] hidden lg:flex">
        <img src={Card} alt="card" />
      </div>
		</div>
	)
};

export default SignupPage;