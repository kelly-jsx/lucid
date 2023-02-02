import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="Lucid" />
      <section className="w-full h-screen bg-center bg-cover bg-[url('assets/bgimg.jpg')]">
        <div className="hero h-screen w-full">
          <div className="text-center hero-content">
            <div className="bg-base-300/80 px-16 py-6 rounded drop-shadow-2xl">
              <h1 className="text-3xl font-bold">Lucid</h1>
              <p className="my-4 text-lg">Next-Gen Social Media</p>
              {/*<div className="mt-4 grid gap-2">*/}
              {/*  {state.state === 'UNKNOWN' ? null : state.state === 'SIGNED_OUT' ? <SignInButton /> : <SignOutButton />}*/}
              {/*  <button onClick={() => setIsOpen(true)}>Display Dialog</button>*/}
              {/*</div>*/}
              <div className="flex space-x-4">
                <button className="btn btn-primary drop-shadow-md">Sign In</button>
                <button className="btn btn-outline btn-secondary drop-shadow-md">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<Dialog*/}
      {/*  className="flex fixed inset-0 z-10 overflow-y-auto"*/}
      {/*  initialFocus={completeButtonRef}*/}
      {/*  open={isOpen}*/}
      {/*  onClose={() => setIsOpen(false)}*/}
      {/*>*/}
      {/*  <div className="flex items-center justify-center min-h-screen w-screen">*/}
      {/*    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />*/}
      {/*    <div className="relative bg-white rounded max-w-120 p-8 mx-auto">*/}
      {/*      <Dialog.Title>Dialog Title</Dialog.Title>*/}
      {/*      <Dialog.Description>Dialog description</Dialog.Description>*/}
      {/*      <button*/}
      {/*        ref={completeButtonRef}*/}
      {/*        type="button"*/}
      {/*        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"*/}
      {/*        onClick={() => setIsOpen(false)}*/}
      {/*      >*/}
      {/*        Got it, thanks!*/}
      {/*      </button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</Dialog>*/}
    </>
  );
}

export default Index;
