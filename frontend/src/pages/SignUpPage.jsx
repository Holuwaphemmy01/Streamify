import React from 'react'
import { ShipWheelIcon } from 'lucide-react'
import { Link } from 'react-router'
const SignUpPage = () => {

  const [signupData, setSignUpData] = React.useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleSignUp = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className='h-screen flex items-center justify-center p-4 sm:p-6 md:p-8' data-theme="forest">
      <div className='border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100
      rounded-xl shadow-lg overflow-hidden'>
        <div className='w-full lg:w-1/2 p-4 sm:p-8 flex flex-col'>
          <div className='mb-4 flex items-center justify-start gap-2'>
            <ShipWheelIcon className="size-9 text-primary"/>
            <span className='text-3xl font-bold font-mono bg-clip-text text-transparent bg-gradient-to-r from-primary 
            to-secondary tracking-wider'>
              Streamify
              </span>
          </div>

          <div className='w-full'>
            <form onSubmit={handleSignUp}>
              <div className='space-y-4'>
                <div>
                  <h2 className='text-xl font-semibold'>Create an account</h2>
                  <p className='text-sm opacity-70'>
                    Join Streamify and start your language learning adventure!
                  </p>
                </div>

                <div className='space-y-3'>
                  {/* Full Name Input Field */}
                   <div className='form-control w-full'>
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>

                      <input type="text" 
                      placeholder='John Doe'
                      className='input input-bordered w-full'
                      value={signupData.fullName}
                      onChange={(e)=> setSignUpData({...signupData, fullName: e.target.value})}
                      required
                      />
                   </div>
                   {/* Email Input Field */}
                   <div className='form-control w-full'>
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>

                      <input type="email" 
                      placeholder='john.doe@example.com'
                      className='input input-bordered w-full'
                      value={signupData.email}
                      onChange={(e)=> setSignUpData({...signupData, email: e.target.value})}
                      required
                      />
                   </div>
                    {/* Password Input Field */}
                    <div className='form-control w-full'>
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>

                      <input 
                      type="password" 
                      placeholder='••••••••'
                      className='input input-bordered w-full'
                      value={signupData.password}
                      onChange={(e)=> setSignUpData({...signupData, password: e.target.value})}
                      required
                      />
                      <p className='text-xs opacity-70 mt-1'>
                        Your password must be at least 6 characters long.
                      </p>
                   </div>
                    {/* Agreement */}
                    <div className='form-control'>
                    <label className='label cursor-pointer justify-start gap-2'>
                      <input type="checkbox" className='checkbox checkbox-sm' required />
                      <span className='text-xs leading-tight'>
                        I agree to the{" "} 
                        <span className='text-primary hover:underline'>terms of service</span> and{" "}
                        <span className='text-primary hover:underline'>privacy policy</span>
                      </span>
                    </label>
                    </div>           
                </div>

                {/* Submit Button */}
                <button className='btn btn-primary w-full' type='submit'> 
                  Create Account
                </button>

                {/* Redirect to Login */}
                <div className='text-center mt-4'>
                <p className='text-sm'>
                  Already have an account?{" "}
                  <Link to="/login" className='text-primary hover:underline'>
                     Sign in
                  </Link>
                </p>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SignUpPage
