import { AiFillHome, AiFillMessage, BsFillBookmarksFill, IoNotifications, IoSettings } from 'react-icons/all';
import { SidebarButton } from '~/components/shared/Sidebar/SidebarIconButton';
import { PostInput } from '~/components/shared/Feed/PostInput';

export const Sidebar = () => (
  <>
    <div className="drawer-mobile drawer flex flex-col">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/*<div className="drawer-content flex flex-col items-center justify-center">*/}
      {/*  <label htmlFor="my-drawer-2" className="btn-primary drawer-button btn lg:hidden">*/}
      {/*    Open drawer*/}
      {/*  </label>*/}
      {/*</div>*/}
      <div className="drawer-side fixed top-0 z-50 mt-20 flex flex-col">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu flex flex-col p-4 pr-28 text-base-content">
          <SidebarButton tipText={'Home'}>
            <AiFillHome className="h-8 w-8" />
          </SidebarButton>
          <div className="indicator">
            <span className="badge-primary badge indicator-item cursor-default">2137</span>
            <SidebarButton tipText={'Notifications'}>
              <IoNotifications className="h-8 w-8" />
            </SidebarButton>
          </div>
          <div className="indicator">
            <span className="badge-primary badge indicator-item cursor-default">934</span>
            <SidebarButton tipText={'Messages'}>
              <AiFillMessage className="h-8 w-8" />
            </SidebarButton>
          </div>
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
