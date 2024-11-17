import PropTypes from 'prop-types';

function ArchiveTypeSectionLayout({ isAuthenticated, children }) {
  return (
    <section className="flex flex-col items-center gap-[50px]">
      <h2>Archive your images, videos, notes, and websites that are all around the Internet</h2>
      <p>What do you want to archive? 😙</p>
      {isAuthenticated ? (
        <div className="grid grid-cols-2 gap-[30px]">
          <button className="w-[150px] h-[50px] border rounded-[10px] bg-[#E8D7D7] border-[#E8D7D7] text-[20px] hover:bg-[#DCABAB] hover:text-[white]">
            IMAGE
          </button>
          <button className="w-[150px] h-[50px] border rounded-[10px] bg-[#E8D7D7] border-[#E8D7D7] text-[20px] hover:bg-[#DCABAB] hover:text-[white]">
            NOTE
          </button>
          <button className="w-[150px] h-[50px] border rounded-[10px] bg-[#E8D7D7] border-[#E8D7D7] text-[20px] hover:bg-[#DCABAB] hover:text-[white]">
            VIDEO
          </button>
          <button className="w-[150px] h-[50px] border rounded-[10px] bg-[#E8D7D7] border-[#E8D7D7] text-[20px] hover:bg-[#DCABAB] hover:text-[white]">
            WEB
          </button>
        </div>
      ) : (
        <></>
      )}

      <>{children}</>
    </section>
  );
}

ArchiveTypeSectionLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  isAuthenticated: PropTypes.bool,
};

export default ArchiveTypeSectionLayout;
