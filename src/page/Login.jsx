import { useState } from 'react';
import { Link } from 'react-router-dom';
import GlobalLayout from '../layout/GlobalLayout';

function Login() {
  const [email, setEmail] = useState('');
  const [emailValidation, setEmailValidation] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const emailRegex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[0-9]).{8,}$/;

  const getUserEmail = (e) => {
    setEmail(e.target.value);
    setEmailValidation(!emailRegex.test(email));
    makeReadyToLogin();
  };

  const getUserPassword = (e) => {
    setPassword(e.target.value);
    setPasswordValidation(!passwordRegex.test(password));
    makeReadyToLogin();
  };

  const makeReadyToLogin = () => {
    const checkEmailRegex = emailRegex.test(email);
    const checkPasswordRegex = passwordRegex.test(password);

    setIsDisabled(!(checkEmailRegex && checkPasswordRegex));
  };

  return (
    <GlobalLayout>
      <div className="flex items-center justify-center">
        <div className="w-[600px] p-[50px] flex flex-col gap-[50px] border border-[#CE8181] rounded-[10px]">
          <h2 className="text-[24px]">Login</h2>

          <form className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-1">
                <label htmlFor="email">Email</label>
                {emailValidation && <span className="self-end text-[12px] text-[#CE8181]">이메일은 최소한 @와 .를 포함해야합니다.</span>}
              </div>
              <input
                type="email"
                value={email}
                onChange={getUserEmail}
                className="p-[10px] rounded-[10px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent"
              />
            </div>

            <div className="flex flex-col gap-[10px]">
              <div className="flex items-center gap-1">
                <label htmlFor="password">Password</label>
                {passwordValidation && <span className="self-end text-[12px] text-[#CE8181]">비밀번호는 영어, 숫자 포함 최소 8자 이상이어야 합니다.</span>}
              </div>
              <input
                type="password"
                value={password}
                onChange={getUserPassword}
                className="p-[10px] rounded-[10px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent"
              />

              <a href="/" className="ml-auto text-[14px] hover:text-[#CE8181]">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isDisabled}
              className={`p-[10px] rounded-[10px] ${isDisabled ? 'bg-[#E8D7D7] cursor-not-allowed' : 'cursor-pointer bg-[#DCABAB]'}`}
            >
              Login
            </button>
          </form>

          <span className="mx-auto">
            Don&#39;t you have an account?{' '}
            <Link to="/signup" className="text-[#DCABAB] hover:text-[#CE8181] cursor-pointer">
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </GlobalLayout>
  );
}

export default Login;
