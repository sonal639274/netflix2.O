import React, { useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

const Error = () => {
    var navigate = useNavigate();
    useEffect(()=>{
        navigate('/');
    })
  return (
    <div>
      
    </div>
  )
}

export default Error
