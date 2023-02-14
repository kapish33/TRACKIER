import { useState } from 'react';
import { useSelector } from 'react-redux';
import { EmailRegex, PasswordRegex, AlphaREgex } from '../utiils/constant';

const Regestration = () => {
  const { myInfo } = useSelector((state) => state?.user);
  const [regestrationData, setRegestrationData] = useState(myInfo);

  const ButtonIsDisableOrNot =
    !!regestrationData?.firstName?.match(AlphaREgex) &&
    !!regestrationData?.lastName?.match(AlphaREgex) &&
    !!regestrationData?.email?.match(EmailRegex) &&
    !!regestrationData.password?.match(PasswordRegex) &&
    regestrationData?.Conform_password === regestrationData?.Conform_password;

  const handelChange = (event) => {
    const { value, name } = event.target;
    setRegestrationData({
      ...regestrationData,
      [name]: value,
    });
  };

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
                <p className='mx-4 mb-0 text-center font-semibold'>
                  Regestration
                </p>
              </div>
              {/* First name */}
              <div className='mb-6'>
                <input
                  type='text'
                  name='firstName'
                  pattern={AlphaREgex}
                  onChange={handelChange}
                  value={regestrationData?.firstName}
                  className='inp'
                  placeholder='First Name'
                  maxLength={20}
                  required
                />
              </div>
              {/* Last name */}
              <div className='mb-6'>
                <input
                  type='text'
                  name='lastName'
                  onChange={handelChange}
                  value={regestrationData?.lastName}
                  pattern={AlphaREgex}
                  className='inp'
                  placeholder='Last Name'
                  maxLength={20}
                  required
                />
              </div>
              {/* Email input  */}
              <div className='mb-6'>
                <input
                  type='email'
                  name='email'
                  onChange={handelChange}
                  value={regestrationData?.email}
                  pattern={EmailRegex}
                  className='inp'
                  placeholder='Email address'
                  maxLength={20}
                  required
                />
              </div>

              {/* Password input  */}
              <div className='mb-6'>
                <input
                  type='password'
                  name='password'
                  onChange={handelChange}
                  value={regestrationData?.password}
                  pattern={PasswordRegex}
                  className='inp'
                  placeholder='Password'
                  maxLength={20}
                  required
                />
              </div>
              {/* Compare Password */}
              <div className='mb-6'>
                <input
                  type='password'
                  name='Conform_password'
                  onChange={handelChange}
                  value={regestrationData?.Conform_password}
                  className='inp'
                  pattern={PasswordRegex}
                  placeholder='Conform Password'
                  maxLength={20}
                  required
                />
              </div>

              <div className='mb-6 flex items-center justify-between'>
                <div className='form-group form-check'>
                  <input
                    type='checkbox'
                    className='form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none'
                    id='remmemberMe'
                  />
                  <label
                    className='form-check-label inline-block text-gray-800'
                    htmlFor='remmemberMe'>
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
                data-mdb-ripple-color='light'>
                Regestration
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regestration;
