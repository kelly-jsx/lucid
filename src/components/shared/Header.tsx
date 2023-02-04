import { TextInput } from '~/components/shared/TextInput';

type Props = {
  type: string;
  placeholder: string;
  required?: boolean;
  mt?: string;
};

export const Header = () => (
  <>
    <div className="navbar bg-base-100 sticky top-0 z-30">
      <div className="navbar-start">
        <a href={'/'} className="btn btn-ghost normal-case text-xl text-primary">
          Lucid
        </a>
      </div>
      <div className="navbar-center">
        <TextInput type={'text'} placeholder={'Search...'} />
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://source.unsplash.com/random/800x800/?img=1" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </>
);
