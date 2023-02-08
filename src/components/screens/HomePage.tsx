import { Header } from '~/components/shared/Header';
import { Sidebar } from '~/components/shared/Sidebar/Sidebar';
import { Feed } from '~/components/shared/Feed/Feed';
import { CreateButton } from '~/components/shared/CreateButton';
import { BottomNav } from '~/components/shared/BottomNav';

function HomePage() {
  return (
    <>
      {/*<Head title={'The page is not found'}></Head>*/}
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-4">
        <Sidebar notifyCount={2137} messCount={934} />
        <div className="mx-auto mt-24 w-full md:col-span-2 2xl:w-4/6">
          <Feed />
        </div>
        {/*<div className="mx-4 mt-24">dupa</div>*/}
        <CreateButton />
        <BottomNav />
      </div>
    </>
  );
}

export default HomePage;
