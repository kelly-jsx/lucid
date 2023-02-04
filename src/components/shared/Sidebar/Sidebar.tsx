import { AiFillHome, AiFillMessage, BsFillBookmarksFill, IoNotifications, IoSettings } from 'react-icons/all';
import { SidebarButton } from '~/components/shared/Sidebar/SidebarIconButton';

export const Sidebar = () => (
  <>
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side sticky z-0">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 pr-28 text-base-content">
          <SidebarButton tipText={'Home'}>
            <AiFillHome className="h-8 w-8" />
          </SidebarButton>
          <SidebarButton tipText={'Notifications'}>
            <IoNotifications className="h-8 w-8" />
          </SidebarButton>
          <SidebarButton tipText={'Messages'}>
            <AiFillMessage className="h-8 w-8" />
          </SidebarButton>
          <SidebarButton tipText={'Bookmarks'}>
            <BsFillBookmarksFill className="h-8 w-8" />
          </SidebarButton>
          <SidebarButton tipText={'Settings'}>
            <IoSettings className="h-8 w-8" />
          </SidebarButton>
        </div>
      </div>
    </div>
  </>
);
