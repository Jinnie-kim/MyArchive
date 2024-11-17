import GlobalLayout from '../layout/GlobalLayout';

function Login() {
  return (
    <GlobalLayout>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[600px] p-[50px] flex flex-col gap-[50px] border border-[#CE8181] rounded-[10px]">
          <h2 className="text-[24px]">Login</h2>

          <form className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="email">Email</label>
              <input type="email" className="p-[10px] rounded-[10px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent" />
            </div>

            <div className="flex flex-col gap-[10px]">
              <label htmlFor="password">Password</label>
              <input type="password" className="p-[10px] rounded-[10px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent" />

              <a href="/" className="ml-auto text-[14px] hover:text-[#CE8181]">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="p-[10px] rounded-[10px] bg-[#E8D7D7] hover:bg-[#DCABAB]">
              Login
            </button>
          </form>

          <span className="mx-auto">
            Don&#39;t you have an account? <a className="text-[#DCABAB] hover:text-[#CE8181] cursor-pointer">Sign up</a>
          </span>
        </div>
      </div>
    </GlobalLayout>
  );
}

export default Login;
