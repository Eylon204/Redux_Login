import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  login,
  selectUserName,
  selectAuthenticated,
  logout
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const userName = useSelector(selectUserName);
  const authenticated = useSelector(selectAuthenticated);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');
  const [username, setUsername] = useState('');
  const [pwd, setpwd] = useState('');

  return (
    <div>
      <div>
          User:
          <input onChange={(e) => setUsername(e.target.value)}/>
          Password:
          <input onChange={(e) => setpwd(e.target.value)}/>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        {authenticated ? 
        <button onClick={() => dispatch(logout())}>Logout</button>:
        <button onClick={() => dispatch(login({username, pwd}))}>Login</button>
      }
      </div>
    </div>
  );
}