import { Head } from '~/components/shared/Head';
import { Header } from '~/components/shared/Header';
import { Sidebar } from '~/components/shared/Sidebar/Sidebar';

function HomePage() {
  return (
    <>
      {/*<Head title={'The page is not found'}></Head>*/}
      <Header />
      <Sidebar />
    </>
  );
}

export default HomePage;
