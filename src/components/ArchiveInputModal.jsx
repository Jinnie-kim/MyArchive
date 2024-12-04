import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useAuth } from '../store/useAuth';
import { insertData } from '../api/crud';
import { PropTypes } from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';

function ArchiveInputModal({ type, isOpen, onClose }) {
  const { user } = useAuth();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const getTitleData = (e) => {
    setTitle(e.target.value);
  };

  const getBodyData = (e) => {
    setBody(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();
    const result = await insertData(type, title, body, user.id);

    if (result) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="flex flex-col gap-[20px] inset-x-0 mx-auto top-1/2 transform -translate-y-1/2 w-[560px] p-6 rounded-[10px] border border-[#E8D7D7] bg-[#F7F6F4]">
        <div className="flex justify-between">
          <span className="w-[70px] px-[5px] text-center rounded-[15px] border bg-[#DCABAB]">{type}</span>
          <button type="button" onClick={onClose}>
            <TiDeleteOutline size={20} className="font-semibold text-[#6B7280] hover:text-[#DCABAB]" />
          </button>
        </div>
        <form className="flex flex-col gap-[20px]" onSubmit={submitData}>
          <div className="flex items-center justify-between">
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={getTitleData}
              className="w-[450px] p-[3px] rounded-[15px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent"
            />
          </div>
          <div className="flex items-center justify-between">
            {type === 'NOTE' ? (
              <>
                <label>Body</label>
                <textarea
                  value={body}
                  onChange={getBodyData}
                  className="w-[450px] p-[5px] rounded-[15px] border border-[#E8D7D7] bg-transparent focus:outline-[#DCABAB]"
                />
              </>
            ) : (
              <>
                <label>Url</label>
                <input
                  type="url"
                  value={body}
                  onChange={getBodyData}
                  className="w-[450px] p-[3px] rounded-[15px] border border-[#E8D7D7] focus:outline-[#DCABAB] bg-transparent"
                />
              </>
            )}
          </div>

          <button type="submit" className="self-end w-[70px] bg-[#E8D7D7] rounded-[15px] text-[14px]">
            ADD
          </button>
        </form>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

ArchiveInputModal.propTypes = {
  type: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ArchiveInputModal;
