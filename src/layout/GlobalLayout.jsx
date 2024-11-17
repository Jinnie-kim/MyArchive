import { useState } from 'react';
import PropTypes from 'prop-types';

function GlobalLayout({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  console.log(setIsAuth);

  const renderedHeaderLinks = () => {
    if (isAuth) {
      return (
        <ul className="flex gap-2">
          <li>Archives</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      );
    }
    return (
      <ul className="flex gap-2">
        <li>Login</li>
        <li>Signup</li>
      </ul>
    );
  };

  return (
    <div className="w-full min-w-[1000px] h-full min-h-[100vh] flex flex-col items-center border p-[45px]">
      <header className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight">My Archive .*:•</h1>
        {renderedHeaderLinks()}
      </header>
      <main className="relative w-full h-screen">{children}</main>
    </div>
  );
}

GlobalLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GlobalLayout;
