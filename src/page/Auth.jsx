function Auth() {
  return (
    <div className="w-full min-w-[1000px] h-full flex flex-col items-center gap-[20px]">
      <header>
        <h1 className="text-4xl font-bold">⊹⁺⸜ My Archive ⸝⁺⊹</h1>
      </header>
      <main className="relative w-[850px] max-w-[90vw] h-[600px] p-[20px]">
        <div className="flex items-center justify-center h-full gap-[100px]">
          <div>
            <button type="button" className="w-[150px] p-[10px] border-b border-[#fec2d6] hover:text-[#fec2d6] text-white">
              Login
            </button>
          </div>
          <div>
            <button type="button" className="w-[150px] p-[10px] border-b border-[#bd87fa] hover:text-[#bd87fa] text-white">
              Submit
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Auth;
