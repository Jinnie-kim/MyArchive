import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../store/useAuth';
import { signout } from '../api/auth';

function GlobalLayout({ children }) {
  const { user } = useAuth();
  const [isScrolled, setIsScrolled] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const handleLogout = async () => {
    const { error } = await signout();

    if (error) {
      alert('로그아웃에 실패했습니다.', error);
      return;
    }
  };

  const renderedHeaderLinks = () => {
    if (user) {
      return (
        <ul className="flex gap-2">
          <li>
            <Link to="/myarchive">Archives</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>
      );
    }
    return (
      <ul className="flex gap-2">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header
        className={`sticky top-0 left-0 right-0 z-50 flex justify-center ${isScrolled ? 'bg-[#EDE9E6]/[.08] backdrop-blur-sm shadow-sm' : 'bg-transparent'}`}
      >
        <div className="w-full min-w-[1000px] max-w-[1200px] h-[80px] px-[45px] flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-tight">
            <Link to="/">My Archive .*:•</Link>
          </h1>
          {renderedHeaderLinks()}
        </div>
      </header>
      <main className="flex-1 flex justify-center">
        <div className="w-full min-w-[1000px] max-w-[1200px] px-[45px] py-[40px]">{children}</div>
      </main>
    </div>
  );
}

GlobalLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default GlobalLayout;
