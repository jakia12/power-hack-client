import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiOutlineGoogle } from 'react-icons/ai';
import { AuthState } from '../../context/AuthProvider';
import { useForm } from 'react-hook-form';
import { RiEyeCloseLine } from 'react-icons/ri';
import { MdOutlineRemoveRedEye } from 'react-icons/md';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, setLoading, loading, user, googleSignIn } = AuthState();

    //form validation by hook form


    //handlw jwt user authorization
    const [loginUserEmail, setLoginUserEmail] = useState('');


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || "/";

    //error handling while login
    const [error, setError] = useState('');

    //handle login
    const handleLogin = (data) => {
        console.log(data.password);
        login(data.email, data.password)
            .then((res) => {
                const user = res.user;
                console.log(data.password);
                console.log(user);
                alert('user signed up successfully');
                // toast.success(`Wow!!! User logged in successfully`, {
                //     position: toast.POSITION.TOP_CENTER,

                //     autoClose: 1000
                // });

                navigate('/');
                setLoginUserEmail(data.email);


            })
            .catch(err => {
                console.log(err);
                setError(err.message)
            })
            .finally(() => {
                setLoading(false);
            })
    }

    //  google login
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(res => {
                const user = res.user;

                console.log(user);
                navigate('/');
            })
            .catch(err => console.log(err))
    }

    //state to display the password as text

    const [isDisplayText, setIsDisplayText] = useState(false);

    //display password as a text clicking on eye icon
    const handleDisplayText = (e) => {

        e.preventDefault();
        isDisplayText === true ? setIsDisplayText(false) : setIsDisplayText(true);
    }
    return (
        <section className=" login_section py-14 bg-gray-100 ">
            <div className='container mx-auto lg:max-w-7xl md:px-10 px-4'>

                <div className=' bg-white px-8 md:px-10 py-10 w-full mx-auto lg:max-w-lg rounded'>

                    <h2 className="text-3xl font-semibold text-dark mt-5 mb-10 text-center">Login Now!</h2>
                    <h3 className="text-red-600 text-xl pb-3">{error}</h3>
                    <form onSubmit={handleSubmit(handleLogin)} className="flex flex-col gap-4 text-left">
                        <div className="mb-1">
                            <label for="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                id="email"
                                className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.email ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`}
                                placeholder="Your email"
                                {...register("email", {
                                    required: "Email is required",


                                })}
                            />
                            {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                        </div>
                        <div className="mb-1 relative">
                            <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input
                                type={isDisplayText ? "text" : "password"}
                                id="password"
                                className={`bg-gray-50 text-gray-900 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${(errors.password ? " border border-red-500 focus:border-red-500" : " border border-gray-300 focus:border-blue-500")}`} placeholder="Your password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },

                                })}
                            />
                            <button
                                className='absolute top-9 right-4'
                                onClick={handleDisplayText}
                            >
                                {
                                    isDisplayText ?
                                        (
                                            <span className="text-2xl text-dark ">

                                                < MdOutlineRemoveRedEye />
                                            </span>
                                        )
                                        :
                                        (
                                            <span className="text-2xl text-dark ">
                                                <RiEyeCloseLine />
                                            </span>
                                        )
                                }

                            </button>
                            {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                        </div>

                        <button className='bg-teal-500 text-white hover:bg-teal-700 py-2 rounded-lg text-lg' type="submit" >
                            Login
                        </button>


                    </form>
                    <div className="flex justify-between items-center py-6">
                        <span className="text-normal text-dark font-normal ">Not signed up yet?</span><span className="text-dark text-normal font-normal"> <Link to="/signUp" className='underline'>Sign Up here</Link></span>
                    </div>

                    <div className="divider">OR</div>
                    <div className="text-center">
                        <button
                            type="button"
                            className="text-white bg-gray-700 hover:bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-14 py-3 mt-6 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                            onClick={handleGoogleLogin}
                        >
                            <div className="flex items-center">
                                <span className="text-xl text-white inline-block "><AiOutlineGoogle />
                                </span>
                                <span className='text-normal font-normal ml-2'>Continue with Google</span>
                            </div>

                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login
