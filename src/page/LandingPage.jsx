import { Link } from 'react-router-dom';
import GlobalLayout from '../layout/GlobalLayout';
import ArchiveTypeSectionLayout from '../layout/ArchiveTypeSectionLayout';
import { LuSparkles } from 'react-icons/lu';
import { LuFolderTree } from 'react-icons/lu';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { IoShareSocialOutline } from 'react-icons/io5';

function LandingPage() {
  return (
    <GlobalLayout>
      <ArchiveTypeSectionLayout>
        <div className="w-[960px] m-auto mt-[120px] flex flex-col items-center gap-[150px]">
          <section>
            <h2 className="text-center mb-[60px] text-[20px]">Why My Archive?</h2>
            <ul className="flex gap-[90px]">
              <li className="h-[250px] flex flex-col justify-between items-center">
                <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[#E5D4D4]">
                  <LuSparkles size={40} color="#CE8181" />
                </div>
                <h3>Easy Save</h3>
                <p className="text-center">Save anything interesting with just one click</p>
              </li>
              <li className="h-[250px] flex flex-col justify-between items-center">
                <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[#E5D4D4]">
                  <LuFolderTree size={40} color="#CE8181" />
                </div>
                <h3>Organized</h3>
                <p className="text-center">Auto-categorize your archives by types</p>
              </li>
              <li className="h-[250px] flex flex-col justify-between items-center">
                <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[#E5D4D4]">
                  <FaMagnifyingGlass size={40} color="#CE8181" />
                </div>
                <h3>Quick Find</h3>
                <p className="text-center">Find your archives intantly with smart search</p>
              </li>
              <li className="h-[250px] flex flex-col justify-between items-center">
                <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full bg-[#E5D4D4]">
                  <IoShareSocialOutline size={40} color="#CE8181" />
                </div>
                <h3>Access Anyware</h3>
                <p className="text-center">Access your archives from any device</p>
              </li>
            </ul>
          </section>
          <section className="flex flex-col items-center gap-[50px]">
            <h2 className="text-[32px]">Ready to Start?</h2>
            <p>Join thousands of people who organise their digital life with My Archive</p>
            <Link
              to="/signup"
              className="w-[200px] h-[60px] bg-[#E8D7D7] hover:bg-[#DCABAB] hover:text-white rounded-[10px] text-[24px] flex items-center justify-center cursor-pointer"
            >
              Sign Up Now
            </Link>
          </section>
        </div>
      </ArchiveTypeSectionLayout>
    </GlobalLayout>
  );
}

export default LandingPage;
