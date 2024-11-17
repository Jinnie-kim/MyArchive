import { FaRegCopy } from 'react-icons/fa6';
import { FiEdit3 } from 'react-icons/fi';
import { TiDeleteOutline } from 'react-icons/ti';

function ArchiveCard() {
  return (
    <article className="flex flex-col gap-[10px] w-[230px] h-[260px] p-[11px] border border-[#E8D7D7] rounded-[10px]">
      <span className="w-[70px] px-[5px] text-center rounded-[15px] border bg-[#DCABAB]">Image</span>
      <div>
        <img src="https://i.pinimg.com/736x/97/e0/ff/97e0ffd877a1757a0955e8951c54a0e9.jpg" alt="파워퍼프걸" className="rounded-[10px]" />
        <h3>power puff girl✨</h3>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-[10px]">
          <button>
            <FaRegCopy className="font-semibold text-[#6B7280] hover:text-[#fb7185]" />
          </button>
          <button>
            <FiEdit3 className="font-semibold text-[#6B7280] hover:text-[#fb7185]" />
          </button>
        </div>
        <button type="button">
          <TiDeleteOutline size={20} className="font-semibold text-[#6B7280] hover:text-[#fb7185]" />
        </button>
      </div>
    </article>
  );
}

export default ArchiveCard;
