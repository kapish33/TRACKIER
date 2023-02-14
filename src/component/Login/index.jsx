import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  EmailRegex,
  getLocalStorage,
  PasswordRegex,
  USER,
} from '../utiils/constant';

const Login = () => {
  const navigate = useNavigate();
  const [regestrationData, setRegestrationData] = useState({
    email: 'email@test.com',
    password: 'Qwe123@#',
  });

  const ButtonIsDisableOrNot =
    !!regestrationData?.email?.match(EmailRegex) &&
    !!regestrationData?.password?.match(PasswordRegex);

  const handelChange = (event) => {
    const { value, name } = event.target;
    setRegestrationData({
      ...regestrationData,
      [name]: value,
    });
  };

  const handelClick = (e) => {
    e.preventDefault();
    const localUser = getLocalStorage(USER);
    if (regestrationData.password === localUser.password) {
      navigate(`/dashboard`);
    }
  };

  useEffect(() => {
    getLocalStorage(USER) && navigate(`/dashboard`);
  }, [navigate]);
  return (
    <section className='h-screen'>
      <div className='container mx-auto h-full px-6 py-12'>
        <div className='g-6 flex h-full flex-wrap items-center justify-center text-gray-800'>
          <div className='mb-12 hidden md:mb-0 md:w-8/12 lg:block lg:w-6/12'>
            <img
              src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg'
              className='w-full'
              alt='Phone'
            />
          </div>
          <div className='md:w-8/12 lg:ml-20 lg:w-5/12'>
            <form>
              <div className='my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300'>
                <p className='mx-4 mb-0 text-center font-semibold'>Login</p>
              </div>
              {/* Email input  */}
              <div className='mb-6'>
                <input
                  type='text'
                  className='inp'
                  name='email'
                  onChange={handelChange}
                  pattern={EmailRegex}
                  placeholder='Email address'
                  value={regestrationData?.email}
                  required
                />
              </div>

              {/* Password input  */}
              <div className='mb-6'>
                <input
                  type='password'
                  className='inp'
                  placeholder='Password'
                  name='password'
                  pattern={PasswordRegex}
                  onChange={handelChange}
                  value={regestrationData?.password}
                  required
                />
              </div>

              {/* Checkbox */}
              <div className='mb-6 flex items-center justify-between'>
                <div className='form-group form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none'
                    id='exampleCheck3'
                  />
                  <label
                    className='form-check-label inline-block text-gray-800'
                    htmlFor='exampleCheck3'>
                    Remember me
                  </label>
                </div>
              </div>

              {/* Submit button  */}
              <button
                type='submit'
                className='btn'
                data-mdb-ripple='true'
                disabled={!ButtonIsDisableOrNot}
                onClick={(e) => handelClick(e)}
                data-mdb-ripple-color='light'>
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
