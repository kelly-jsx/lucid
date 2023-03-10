import { Dialog } from '@headlessui/react';
import { useRef, useState } from 'react';
import { useAuthState } from '~/components/contexts/UserContext';
import { SignInButton } from '~/components/domain/auth/SignInButton';
import { SignOutButton } from '~/components/domain/auth/SignOutButton';
import { Head } from '~/components/shared/Head';
import { TextInput } from '~/components/shared/TextInput';
import { SiGithub } from 'react-icons/all';
import { Link, useNavigate } from 'react-router-dom';

function Index() {
  const { state } = useAuthState();
  const [isOpen, setIsOpen] = useState(true);
  const completeButtonRef = useRef(null);

  const navigate = useNavigate();

  const handleSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    navigate('/feed');
  };

  return (
    <>
      <Head title="Lucid" />
      <section className="h-screen w-full bg-[url('assets/bgimg.jpg')] bg-cover bg-center">
        <nav className="navbar absolute rounded-b-lg bg-base-100/20">
          <div className="flex-1">
            <a className="btn-ghost btn text-xl normal-case">Lucid</a>
          </div>
          <div className="flex-none">
            <a
              href={'https://github.com/kelly-jsx/lucid'}
              target="_blank"
              className="btn-ghost btn text-3xl normal-case"
            >
              <SiGithub />
            </a>
          </div>
        </nav>
        <div className="hero h-screen w-full">
          <div className="hero-content">
            <div className="card w-96 bg-base-100/90 shadow-xl">
              <div className="card-body items-center text-center">
                <h1 className="card-title text-3xl font-bold uppercase">Lucid</h1>
                <p className="mb-3">Next-Gen Social Media</p>
                <div className="card-actions justify-end">
                  <label htmlFor="sign-in-modal" className="btn-primary btn drop-shadow-md">
                    Sign In
                  </label>
                  <label htmlFor="sign-up-modal" className="btn-outline btn-secondary btn drop-shadow-md">
                    Sign Up
                  </label>
                </div>
              </div>
            </div>
          </div>

          <input type="checkbox" id="sign-in-modal" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box">
              <form action="#" method="GET" onSubmit={handleSignUp}>
                <h3 className="text-lg font-bold">Sign In</h3>
                <div className="flex flex-col">
                  <TextInput type={'text'} placeholder={'Username'} mt={'1.5rem'} required={true} />
                  <TextInput type={'password'} placeholder={'Password'} mt={'0.5rem'} required={true} />
                  <label className="label mt-1 cursor-pointer place-content-start gap-2">
                    <input type="checkbox" className="checkbox-primary checkbox m-0" />
                    <span className="label-text">Remember me</span>
                  </label>
                </div>

                <div className="modal-action mt-4">
                  <input type="submit" value="Sign In" className="btn-primary btn" />
                  <label htmlFor="sign-in-modal" className="btn-ghost btn">
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
                <h3 className="text-lg font-bold">Sign Up</h3>
                <div className="flex flex-col">
                  <TextInput type={'text'} placeholder={'Display name'} mt={'1.5rem'} required={true} />
                  <TextInput type={'text'} placeholder={'Username'} mt={'0.5rem'} required={true} />
                  <TextInput type={'email'} placeholder={'E-Mail'} mt={'0.5rem'} required={true} />
                  <TextInput type={'password'} placeholder={'Password'} mt={'0.5rem'} required={true} />
                  <TextInput type={'password'} placeholder={'Confirm password'} mt={'0.5rem'} required={true} />
                  <label className="label mt-1 cursor-pointer place-content-start gap-2">
                    <input type="checkbox" className="checkbox-primary checkbox m-0" required />
                    <span className="label-text">I have read and agree to the privacy policy *</span>
                  </label>
                </div>

                <div className="modal-action mt-4">
                  <input type="submit" value="Sign Up" className="btn-primary btn" />
                  <label htmlFor="sign-up-modal" className="btn-ghost btn">
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
