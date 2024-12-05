import { useState } from 'react';
import PropTypes from 'prop-types';
import ArchiveInputModal from '../components/ArchiveInputModal';

function ArchiveTypeSectionLayout({ children }) {
  const [modalType, setModalType] = useState(null);

  const handleOpenModal = (e) => {
    setModalType(e.target.textContent);
  };

  const handleCloseModal = () => {
    setModalType(null);
  };

  return (
    <section className="flex flex-col items-center gap-[50px]">
      <h2>Archive your images, videos, notes, and websites that are all around the Internet</h2>
      <p>What do you want to archive? 😙</p>

      <div className="grid grid-cols-4 gap-[30px]">
        <button
          type="button"
          onClick={handleOpenModal}
          className="w-[150px] h-[50px] border rounded-[10px] bg-[#E8D7D7] border-[#E8D7D7] text-[20px] hover:bg-[#DCABAB] hover:text-[white]"
        >
          IMAGE
        </button>
        <button
          type="button"
          onClick={handleOpenModal}
          className="w-[150px] h-[50px] border rounded-[10px] bg-[#E8D7D7] border-[#E8D7D7] text-[20px] hover:bg-[#DCABAB] hover:text-[white]"
        >
          NOTE
        </button>
        <button
          type="button"
          onClick={handleOpenModal}
          className="w-[150px] h-[50px] border rounded-[10px] bg-[#E8D7D7] border-[#E8D7D7] text-[20px] hover:bg-[#DCABAB] hover:text-[white]"
        >
          VIDEO
        </button>
        <button
          type="button"
          onClick={handleOpenModal}
          className="w-[150px] h-[50px] border rounded-[10px] bg-[#E8D7D7] border-[#E8D7D7] text-[20px] hover:bg-[#DCABAB] hover:text-[white]"
        >
          WEB
        </button>
      </div>

      {children}
      <ArchiveInputModal isOpen={modalType !== null} onClose={handleCloseModal} type={modalType} />
    </section>
  );
}

ArchiveTypeSectionLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default ArchiveTypeSectionLayout;
