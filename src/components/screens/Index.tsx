import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import { TextInput } from '~/components/shared/TextInput';
import { SiGithub } from 'react-icons/all';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  return (
    <>
      <Head title="Lucid" />
      <section className="w-full h-screen bg-center bg-cover bg-[url('assets/bgimg.jpg')]">
        <nav className="navbar bg-base-100/20 rounded-b-lg absolute">
          <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">Lucid</a>
          </div>
          <div className="flex-none">
            <a
              href={'https://github.com/kelly-jsx/lucid'}
              target="_blank"
              className="btn btn-ghost normal-case text-3xl"
            >
              <SiGithub />
            </a>
          </div>
        </nav>
        <div className="hero h-screen w-full">
          <div className="hero-content">
            <div className="card w-96 bg-base-100/90 shadow-xl">
              <div className="card-body items-center text-center">
                <h1 className="card-title text-3xl uppercase font-bold">Lucid</h1>
                <p className="mb-3">Next-Gen Social Media</p>
                <div className="card-actions justify-end">
                  <label htmlFor="sign-in-modal" className="btn btn-primary drop-shadow-md">
                    Sign In
                  </label>
                  <label htmlFor="sign-up-modal" className="btn btn-outline btn-secondary drop-shadow-md">
                    Sign Up
                  </label>
                </div>
              </div>
            </div>
          </div>

          <input type="checkbox" id="sign-in-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <form action="#" method="GET">
                <h3 className="font-bold text-lg">Sign In</h3>
                <div className="flex flex-col">
                  <TextInput type={'text'} placeholder={'Username'} mt={'1.5rem'} required={true} />
                  <TextInput type={'password'} placeholder={'Password'} mt={'0.5rem'} required={true} />
                  <label className="label cursor-pointer place-content-start gap-2 mt-1">
                    <input type="checkbox" className="checkbox checkbox-primary m-0" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>

                <div className="modal-action mt-4">
                  <input type="submit" value="Sign In" className="btn btn-primary" />
                  <label htmlFor="sign-in-modal" className="btn btn-ghost">
                    Cancel
                  </label>
                </div>
              </form>
            </div>
          </div>

          <input type="checkbox" id="sign-up-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <form action="#" method="GET">
                <h3 className="font-bold text-lg">Sign Up</h3>
                <div className="flex flex-col">
                  <TextInput type={'text'} placeholder={'Display name'} mt={'1.5rem'} required={true} />
                  <TextInput type={'text'} placeholder={'Username'} mt={'0.5rem'} required={true} />
                  <TextInput type={'email'} placeholder={'E-Mail'} mt={'0.5rem'} required={true} />
                  <TextInput type={'password'} placeholder={'Password'} mt={'0.5rem'} required={true} />
                  <TextInput type={'password'} placeholder={'Confirm password'} mt={'0.5rem'} required={true} />
                  <label className="label cursor-pointer place-content-start gap-2 mt-1">
                    <input type="checkbox" className="checkbox checkbox-primary m-0" required />
                    <span className="label-text">I have read and agree to the privacy policy *</span>
                  </label>
                </div>

                <div className="modal-action mt-4">
                  <input type="submit" value="Sign Up" className="btn btn-primary" />
                  <label htmlFor="sign-up-modal" className="btn btn-ghost">
                    Cancel
                  </label>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index;
