import React from 'react';

import Button from '../components/Button';
import './header.css';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>Customer Explorer</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <span className='logs' onClick={onLogout}>Log out</span>
            {/* <Button variant='primary' size="sm" onClick={onLogout} label="Log out" /> */}
          </>
        ) : (
          <>
          <span className='logs' onClick={onCreateAccount}>Log In</span>
            {/* <Button variant='primary' size="sm" onClick={onCreateAccount} label="Sign up" /> */}
          </>
        )}
      </div>
    </div>
  </header>
);
