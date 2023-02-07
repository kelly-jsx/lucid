import { TextInput } from '~/components/shared/TextInput';

export const Header = () => (
  <>
    <div className="navbar sticky top-0 z-20 bg-base-100">
      <div className="navbar-start">
        <a href={'/'} className="btn-ghost btn text-xl normal-case text-primary">
          Lucid
        </a>
      </div>
      <div className="navbar-center">
        <TextInput type={'text'} placeholder={'Search...'} text={'center'} />
      </div>
      <div className="navbar-end">
        <div className="dropdown-end dropdown">
          <label tabIndex={0} className="btn-ghost btn-circle avatar btn">
            <div className="w-10 rounded-full">
              <img src="https://source.unsplash.com/random/800x800/?img=1" />
            </div>
          </label>
          <ul tabIndex={0} className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
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
