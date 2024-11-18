import GlobalLayout from '../layout/GlobalLayout';

function ProfilePage() {
  return (
    <GlobalLayout>
      <div className="mx-auto">
        <h2 className="text-[24px]">Profile Settings</h2>

        <div className="flex flex-col items-center gap-[80px]">
          <div className="w-[150px] h-[150px] bg-[#E8D7D7] rounded-full"></div>

          <div className="w-full flex flex-col gap-[70px]">
            <div>
              <span>Email</span>
              <p className="mt-[10px] px-[10px] py-[15px] bg-[#E5D4D4] rounded-[10px] ">heejinkim.me@gmail.com</p>
            </div>

            <div className="flex flex-col gap-[20px]">
              <h3 className="text-[20px]">Password</h3>
              <form className="flex flex-col gap-[30px]">
                <div className="flex flex-col">
                  <label>Current Password</label>
                  <input
                    type="password"
                    className="mt-[5px] px-[10px] py-[15px] border rounded-[10px] border-[#E5D4D4] bg-transparent focus:outline-[#DCABAB]"
                  />
                </div>

                <div className="flex flex-col">
                  <label>New Password</label>
                  <input
                    type="password"
                    className="mt-[5px] px-[10px] py-[15px] border rounded-[10px] border-[#E5D4D4] bg-transparent focus:outline-[#DCABAB]"
                  />
                </div>

                <div className="flex flex-col">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    className="mt-[5px] px-[10px] py-[15px] border rounded-[10px] border-[#E5D4D4] bg-transparent focus:outline-[#DCABAB]"
                  />
                </div>

                <button type="submit" className="px-[10px] py-[15px] rounded-[10px] bg-[#E5D4D4] hover:bg-[#DCABAB]">
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}

export default ProfilePage;
