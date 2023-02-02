import React from "react";
import "./headertype1.scss";

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
  projectName: string;
}

const HeaderType1 = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
  projectName
}: HeaderProps) => (
  <header>
    <div className="treWrapper">
      <div>
        <h1>{projectName}</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <span className="logs" onClick={onLogout}>
              Log out
            </span>
            {/* <Button variant='primary' size="sm" onClick={onLogout} label="Log out" /> */}
          </>
        ) : (
          <>
            <span className="logs" onClick={onCreateAccount}>
              Log In
            </span>
            {/* <Button variant='primary' size="sm" onClick={onCreateAccount} label="Sign up" /> */}
          </>
        )}
      </div>
    </div>
  </header>
);
export default HeaderType1;
