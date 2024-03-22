import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from "../context/AuthContext";

const Login = () => {
  const [rememberLogin, setRememberLogin]= useState(true);
  const [email, setEmail]= useState('');
  const [password, setPassword]= useState('');
   
  const {user, logIn} = userAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e)=>{
    e.preventDefault();

    try{
      await logIn(email, password);
      navigate("/");
    } catch(err){
      console.log(err); 
    }
  };
  
  return (
    <>
     <div>
      <img className='hidden sm:block absolute w-full h-full object-cover '
       src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />

      <div className='bg-black/70 fixed top-0 left-0 wf h-screen'>
        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-nsans-bold'>Login</h1>

              <form onSubmit={handleFormSubmit} className='w-full flex flex-col py-4'>
                <input className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='email' autoComplete='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='password' autoComplete='current-password' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>Login</button>
                <div className='flex justify-between itec text-gray-600'>
                  <p>
                    <input type="checkbox" className='mr-2' checked={rememberLogin} onChange={()=> setRememberLogin(!rememberLogin)}/>
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='my-4'>
                  <span className='text-gray-600 mr-2'>New to Netflix</span>
                  <Link to="/signup">Sign Up </Link>
                </p>
              </form>

            </div>
          </div>
        </div>
      </div>
     </div> 
    </>
  );
}

export default Login;
