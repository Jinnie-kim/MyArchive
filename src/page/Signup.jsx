import GlobalLayout from '../layout/GlobalLayout';

function Signup() {
  return (
    <GlobalLayout>
      <div className="h-full flex items-center justify-center">
        <div className="relative flex flex-col gap-[20px] w-[400px] max-[600px] bg-main-rgba rounded-[20px] p-[20px]">
          <h1 className="text-[#ed7790] text-center font-bold text-[24px]">SING UP</h1>
          <form className="flex flex-col gap-[20px]">
            <div>
              <label htmlFor="email" className="text-[#ed7790] font-semibold">
                Email
              </label>
              <input type="email" id="email" className="w-full p-[15px] rounded-[10px] bg-transparent border border-[#ff6072] text-[#ed7790] focus:outline-0" />
            </div>
            <div>
              <label htmlFor="password" className="text-[#ed7790] font-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-[15px] rounded-[10px] bg-transparent border border-[#ff6072]  text-[#ed7790] focus:outline-0"
              />
            </div>

            <button type="submit" className="w-full p-[15px] rounded-[10px] bg-[#ff7a85] text-white font-semibold cursor-pointer hover:bg-[#ff6072]">
              Sing up
            </button>
          </form>
        </div>
      </div>
    </GlobalLayout>
  );
}

export default Signup;
