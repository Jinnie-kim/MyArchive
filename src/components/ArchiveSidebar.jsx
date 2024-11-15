function ArchiveSidebar() {
  return (
    <aside className="w-[30%] h-full rounded-l-[20px] bg-main-rgba">
      <div className="w-full h-full flex flex-col items-center justify-between p-[20px]">
        <div className="flex flex-col items-center gap-[20px]">
          <div className="w-[120px] h-[120px] bg-[#fec2d6] rounded-full"></div>
          <h2>name</h2>
        </div>

        <ul className="w-full flex flex-col gap-[20px]">
          <li className="text-center p-[5px] border border-[#ff6072] text-[#ed7790] hover:bg-[#ff6072] hover:text-white rounded-[10px] cursor-pointer">
            <button>IMAGE</button>
          </li>
          <li className="text-center p-[5px] border border-[#ff6072] text-[#ed7790] hover:bg-[#ff6072] hover:text-white rounded-[10px] cursor-pointer">
            <button>VIDEO</button>
          </li>
          <li className="text-center p-[5px] border border-[#ff6072] text-[#ed7790] hover:bg-[#ff6072] hover:text-white rounded-[10px] cursor-pointer">
            <button>NOTE</button>
          </li>
          <li className="text-center p-[5px] border border-[#ff6072] text-[#ed7790] hover:bg-[#ff6072] hover:text-white rounded-[10px] cursor-pointer">
            <button>WEB</button>
          </li>
        </ul>

        <button className="w-full p-[10px] border border-[#ff6072] text-[#ed7790] hover:bg-[#ff6072] hover:text-white rounded-[10px]">Logout</button>
      </div>
    </aside>
  );
}

export default ArchiveSidebar;
