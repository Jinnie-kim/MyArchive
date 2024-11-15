import PropTypes from 'prop-types';

function GlobalLayout({ children, backgroundColor = '' }) {
  return (
    <div className="w-full min-w-[1000px] h-full flex flex-col items-center gap-[20px]">
      <header>
        <h1 className="text-4xl font-bold">⊹⁺⸜ My Archive ⸝⁺⊹</h1>
      </header>
      <main className={`relative w-[850px] max-w-[90vw] h-[600px] ${backgroundColor} rounded-[20px] p-[20px]`}>{children}</main>
    </div>
  );
}

GlobalLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  backgroundColor: PropTypes.string,
};

export default GlobalLayout;
