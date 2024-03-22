import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { userAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = userAuth();
  const navigate = useNavigate();


  const handleLogout = async ()=> {
  try {
    await logOut();
    navigate('/');
  } catch (err) {
    console.log(err);
  }
};

return (
  <div className='absolute w-full p-4 flex items-center justify-between z-50'>
    <Link to='/'>
      <h1 className='uppercase text-red-500 font-nsans-bold cursor-pointer text-5xl'>netflix</h1>
    </Link>

    {
      user?.email ? (
        <div>
          <Link to='/profile'>
            <button className='pr-4'>Profile</button>
          </Link>
          <Link to='/signup'>
            <button onClick={handleLogout} className='pr-4 bg-red-600 px-5 py-2 rounded cursor-pointer'>Logout</button>
          </Link>
        </div>
      ) : (
        <div>
          <Link to='/login'>
            <button className='pr-4'>Login</button>
          </Link>
          <Link to='/signup'>
            <button className='pr-4 bg-red-600 px-5 py-2 rounded cursor-pointer'>Sign Up</button>
          </Link>
        </div>
      )
    }
  </div>
)
}

export default Navbar; 