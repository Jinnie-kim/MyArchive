import ArchiveCard from '../components/ArchiveCard';
import ArchiveTypeSectionLayout from '../layout/ArchiveTypeSectionLayout';
import GlobalLayout from '../layout/GlobalLayout';

function Home() {
  return (
    <GlobalLayout>
      <ArchiveTypeSectionLayout>
        <section className="flex flex-col gap-12">
          <a href="/" className="ml-auto pb-[5px] border-b-[2px] border-[#DCABAB] hover:text-[#DCABAB]">
            See all archives
          </a>
          <div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 grid-rows-2 gap-12">
              <li>
                <ArchiveCard />
              </li>
              <li>
                <ArchiveCard />
              </li>
              <li>
                <ArchiveCard />
              </li>
              <li>
                <ArchiveCard />
              </li>
              <li>
                <ArchiveCard />
              </li>
              <li>
                <ArchiveCard />
              </li>
              <li>
                <ArchiveCard />
              </li>
              <li>
                <ArchiveCard />
              </li>
            </ul>
          </div>
        </section>
      </ArchiveTypeSectionLayout>
    </GlobalLayout>
  );
}

export default Home;
