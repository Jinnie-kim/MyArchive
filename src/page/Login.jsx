function Login() {
  return (
    <div className="w-full min-w-[1000px] h-full flex flex-col items-center gap-[20px]">
      <header>
        <h1 className="text-4xl font-bold">⊹⁺⸜ My Archive ⸝⁺⊹</h1>
      </header>
      <main className="relative flex items-center justify-center w-[850px] max-w-[90vw] h-[600px] p-[40px]">
        <div className="relative flex flex-col gap-[20px] w-[400px] max-[600px] bg-main-rgba rounded-[20px] p-[20px]">
          <h1 className="text-[#ed7790] font-bold text-[24px]">LOGIN</h1>
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
              Login
            </button>
          </form>
          <a className="self-end text-white text-[15px] pb-[5px] hover:text-[#ff6072] cursor-pointer">go to signup</a>
        </div>
      </main>
    </div>
  );
}

export default Login;
