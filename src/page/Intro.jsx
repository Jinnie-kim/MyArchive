import GlobalLayout from '../layout/GlobalLayout';

function Intro() {
  return (
    <GlobalLayout>
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
    </GlobalLayout>
  );
}

export default Intro;
