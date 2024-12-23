import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Field, Form, Formik, ErrorMessage } from 'formik'; // Added Formik import
import * as Yup from 'yup';
import Alert from '../../components/Alert';
import logo from '../../assets/images/logo.png'
import Locker from '../../assets/images/locker.png'
import { hideLoading, showLoading } from '../../lib/uiService';
import AuthService from '../../services/auth.service';

interface ILoginValues {
	email: string;
	password: string;
	rememberMe: boolean
}

export interface ISetSubmitting {
	setSubmitting: (x: boolean) => void;
}

const LoginPage: React.FC = () => {

	const navigate = useNavigate();
	const [message, setMessage] = useState<string>('')
	const [success, setSuccess] = useState<boolean>(false);

	const handleSubmit = (values: ILoginValues, { setSubmitting }: ISetSubmitting ) => {
		showLoading();
		AuthService.Login(values.email, values.password, values.rememberMe).then(
			(response: any) => {
				hideLoading();
				navigate('/dashboard');
			},
			(error: any) => {
				const resMessage = (error.response && error.response.data) || error.message || error.toString();
				console.log(error);
        setMessage(resMessage);
        setSubmitting(false);
			}
		)
	};

	return (
		<div className="grid lg:grid-cols-2 grid-cols-1 h-screen">
			<div className="relative flex items-center xl:px-36 px-11">
				<div className="absolute top-7 left-9">
					<img src={logo} alt="logo" />
				</div>
				<div className='w-full'>
					{message && <Alert message={message} success={false}/>}
					<h1 className='text-4xl font-semibold mb-4'>Welcome</h1>
					<p className='text-base font-medium mb-10'>Welcome. Please enter your details.</p>
					{/* Formik Form */}
					<Formik 
						initialValues={{ email: '', password: '', rememberMe: false }}
						validationSchema={Yup.object({
							email: Yup.string().email('Invalid email address').required('Required'),
							password: Yup.string().required('Required'),
						})}
						onSubmit={(values, { setSubmitting }) => {
							handleSubmit(values, { setSubmitting })
						}}
					>
						{(formik) => (
							<Form>
								<div className="mb-6">
									<div className='text-sm font-medium mb-2'>
										<label htmlFor='email'>Email</label>
									</div>
									<Field
										type="email"
										name="email"
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
										type="password"
										name="password"
										className="border border-[#D2D4D8] rounded-lg pl-4 py-3.5 text-base text-[#6D717D] w-full"
										placeholder="Enter your password"
									/>
									<div className="text-red-600 text-xs">
										<ErrorMessage name="password" />
									</div>
								</div>
								<div className="flex justify-between mb-7">
									<label className="flex items-center text-[#6d717d] text-sm font-semibold">
										<Field
											name="rememberMe"
											type="checkbox"
											className="w-4 h-4 border border-[#D2D4D8] rounded mr-2.5"
										/>
										Remember for 30 days
									</label>
									<a href="/reset-password" className="text-[#773EE2] text-sm font-semibold">
										forgot your password?
									</a>
								</div>

								<button
									type="submit"
									className="w-full py-3.5 text-white text-base font-bold rounded-lg bg-[#773EE2] mb-3.5"
									disabled={formik.isSubmitting}
								>
									Login
								</button>
								<div className="text-[#6D717D] text-sm flex justify-center">
									<p>
										Don't have an account?{' '}
										<a href="/signup" className="text-[#773EE2] font-semibold">
											Register
										</a>
									</p>
								</div>
							</Form>
						)}
					</Formik>
				</div>
			</div>
			<div className='justify-center items-center bg-[#F3F5F8] hidden lg:flex'>
				<img src={Locker} alt='locker' />
			</div>
		</div>
	)
};

export default LoginPage;