import ArchiveCard from '../components/ArchiveCard';
import GlobalLayout from '../layout/GlobalLayout';

function MyArchivePage() {
  return (
    <GlobalLayout>
      <div className="flex flex-col gap-[40px]">
        <h2 className="text-[24px]">Manage all your archived contents</h2>

        <div className="flex gap-[30px] items-center">
          <form>
            <input
              type="text"
              placeholder="search archives..."
              className="w-[350px] p-[10px] border-[2px] border-[#DCABAB] focus:outline-[#CE8181] bg-transparent rounded-[10px]"
            />
          </form>

          <ul className="flex gap-[20px]">
            <li className="w-[80px] h-[30px] flex items-center justify-center py-[5px] px-[15px] rounded-[15px] bg-[#E8D7D7] hover:bg-[#DCABAB] cursor-pointer">
              <button>IMAGE</button>
            </li>
            <li className="w-[80px] h-[30px] flex items-center justify-center py-[5px] px-[15px] rounded-[15px] bg-[#E8D7D7] hover:bg-[#DCABAB] cursor-pointer">
              <button>VIDEO</button>
            </li>
            <li className="w-[80px] h-[30px] flex items-center justify-center py-[5px] px-[15px] rounded-[15px] bg-[#E8D7D7] hover:bg-[#DCABAB] cursor-pointer">
              <button>NOTE</button>
            </li>
            <li className="w-[80px] h-[30px] flex items-center justify-center py-[5px] px-[15px] rounded-[15px] bg-[#E8D7D7] hover:bg-[#DCABAB] cursor-pointer">
              <button>WEB</button>
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
          <ArchiveCard />
        </div>
      </div>
    </GlobalLayout>
  );
}

export default MyArchivePage;
