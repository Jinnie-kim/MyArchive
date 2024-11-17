import GlobalLayout from '../layout/GlobalLayout';

function Signup() {
  return (
    <GlobalLayout>
      <div className="flex items-center justify-center">
        <div className="w-[600px] p-[50px] flex flex-col gap-[50px] border border-[#CE8181] rounded-[10px]">
          <h2 className="text-[24px]">Sign Up</h2>

          <form className="flex flex-col gap-[30px]">
            <div className="flex flex-col gap-[10px]">
              <label htmlFor="email">Email</label>
              <input type="email" className="p-[10px] rounded-[10px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent" />
            </div>

            <div className="flex flex-col gap-[10px]">
              <label htmlFor="password">Password</label>
              <input type="password" className="p-[10px] rounded-[10px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent" />
              <span className="text-[12px]">Password must be at least 8 characters</span>
            </div>

            <div className="flex flex-col gap-[10px]">
              <label htmlFor="confirm_password">Confirm Password</label>
              <input type="password" className="p-[10px] rounded-[10px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent" />
            </div>

            <button type="submit" className="p-[10px] rounded-[10px] bg-[#E8D7D7]">
              Create Account
            </button>
          </form>

          <span className="mx-auto">
            Already have an account? <a className="text-[#DCABAB] hover:text-[#CE8181] cursor-pointer">Log in</a>
          </span>
        </div>
      </div>
    </GlobalLayout>
  );
}

export default Signup;
