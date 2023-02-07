import { Head } from '~/components/shared/Head';
import { Header } from '~/components/shared/Header';
import { Sidebar } from '~/components/shared/Sidebar/Sidebar';
import { Feed } from '~/components/shared/Feed/Feed';

function HomePage() {
  return (
    <>
      {/*<Head title={'The page is not found'}></Head>*/}
      <Header />
      <div className="grid grid-cols-3">
        <Sidebar />
        <div className="mt-6">
          <Feed />
        </div>
        <div>dupa</div>
      </div>
    </>
  );
}

export default HomePage;
