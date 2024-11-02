import React from 'react'
import { useSelector } from 'react-redux';
import { selectUserName,selectAuthenticated } from './counterSlice';
  
const Welcome = () => {
    const userName = useSelector(selectUserName);
    const authenticated = useSelector(selectAuthenticated);
  
  return (
    <div>

{authenticated && " Welcome " + userName}

    </div>
  )
}

export default Welcome